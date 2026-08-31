import { Backpack, Dices, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { StepButton } from "./ui";

export default function Equipment({
  character,
  update,
  combat,
  itemCatalog,
  equipmentPacks,
  startingGoldByClass,
  backgrounds,
  formatGold,
  goldToCents,
  centsToGold,
}) {
  const selectedBackground = backgrounds.find(
    (item) => item.id === character.background
  );
  const goldRule = startingGoldByClass[character.classId];
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [customItem, setCustomItem] = useState({
    name: "",
    price: "0",
    quantity: "1",
    source: "Manual",
  });

  const inventoryItems = character.equipment || [];
  const inventoryUsed = inventoryItems.reduce(
    (total, item) => total + Math.max(1, Number(item.quantity || 1)),
    0
  );
  const hasBackpack = inventoryItems.some((item) =>
    item.name?.toLowerCase().includes("mochila")
  );
  const inventoryCapacity = 15 + (hasBackpack ? 15 : 0);

  const rollGold = () => {
    if (character.goldRolled || !goldRule) return;
    const dice = Array.from(
      { length: goldRule.dice },
      () => Math.floor(Math.random() * 4) + 1
    );
    const total = dice.reduce((sum, value) => sum + value, 0) * goldRule.multiplier;
    update({
      gold: total,
      goldRolled: true,
      goldRoll: { dice, multiplier: goldRule.multiplier },
      equipment: character.equipment.filter(
        (item) => !item.id?.toString().startsWith("starting-")
      ),
    });
  };

  const buy = (item) => {
    const balance = goldToCents(character.gold);
    const price = goldToCents(item.price);
    if (balance < price) return;
    update({
      gold: centsToGold(balance - price),
      equipment: [
        ...character.equipment,
        {
          id: crypto.randomUUID(),
          name: item.name,
          quantity: 1,
          price: item.price,
          source: "Comprado",
        },
      ],
    });
  };

  const addCustomItem = () => {
    const name = customItem.name.trim();
    if (!name) return;

    const quantity = Math.max(1, Number(customItem.quantity) || 1);
    const price = Number(String(customItem.price).replace(",", ".")) || 0;
    const totalPrice = goldToCents(price * quantity);

    if (totalPrice > 0 && goldToCents(character.gold) < totalPrice) return;

    update({
      gold: centsToGold(goldToCents(character.gold) - totalPrice),
      equipment: [
        ...character.equipment,
        {
          id: crypto.randomUUID(),
          name,
          quantity,
          price,
          source: customItem.source || "Manual",
        },
      ],
    });

    setCustomItem({ name: "", price: "0", quantity: "1", source: "Manual" });
  };

  const removeItem = (itemId) => {
    const item = character.equipment.find((entry) => entry.id === itemId);
    if (!item) return;

    const refund = goldToCents((Number(item.price) || 0) * (Number(item.quantity) || 1));

    update({
      gold: centsToGold(goldToCents(character.gold) + refund),
      equipment: character.equipment.filter((entry) => entry.id !== itemId),
    });
  };

  const categories = [
    "Todos",
    "Armas",
    "Armaduras",
    "Focos Arcanos",
    "Livros",
    "Consumíveis",
    "Iluminação",
    "Kits",
    "Aventura",
    "Roupas",
    "Diversos",
  ];

  const visible = (category === "Todos"
    ? itemCatalog
    : itemCatalog.filter((item) => item.category === category)
  ).filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="equipment">
      <div className="combat-summary">
        <div className="summary-box">
          <span>Classe de armadura</span>
          <strong>{combat.ac}</strong>
        </div>
        <div className="summary-box">
          <span>Pontos de vida</span>
          <strong>{combat.hp}</strong>
        </div>
        <div className="summary-box">
          <span>Deslocamento</span>
          <strong>{combat.speed} m</strong>
        </div>
      </div>

      <div className="gold-box">
        <div>
          <span>Ouro disponível</span>
          <strong>{formatGold(character.gold)}</strong>
        </div>
        <StepButton
          variant="primary"
          icon={Dices}
          onClick={rollGold}
          disabled={character.goldRolled || !goldRule || !selectedBackground}
          title={
            !goldRule || !selectedBackground
              ? "Escolha uma classe e um antecedente primeiro"
              : "Esta rolagem só pode ser feita uma vez"
          }
        >
          Rolagem de Ouro
        </StepButton>
      </div>

      <div className="inventory-capacity-box">
        <div>
          <span>Espaço de itens</span>
          <strong>
            {inventoryUsed} / {inventoryCapacity}
          </strong>
        </div>
        <small>
          {hasBackpack ? "Mochila inclusa: +15 espaços" : "Sem mochila: 15 espaços básicos"}
        </small>
      </div>

      <div className="item-search-box">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pesquisar item por nome..."
          aria-label="Pesquisar item por nome"
        />
      </div>

      <div className="custom-item-panel">
        <h3>Adicionar item personalizado</h3>
        <div className="custom-item-fields">
          <input
            type="text"
            value={customItem.name}
            onChange={(event) =>
              setCustomItem((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Nome do item"
          />
          <input
            type="number"
            min="0"
            step="0.01"
            value={customItem.price}
            onChange={(event) =>
              setCustomItem((current) => ({ ...current, price: event.target.value }))
            }
            placeholder="Preço"
          />
          <input
            type="number"
            min="1"
            value={customItem.quantity}
            onChange={(event) =>
              setCustomItem((current) => ({ ...current, quantity: event.target.value }))
            }
            placeholder="Qtd."
          />
          <input
            type="text"
            value={customItem.source}
            onChange={(event) =>
              setCustomItem((current) => ({ ...current, source: event.target.value }))
            }
            placeholder="Origem"
          />
          <button type="button" className="add-custom-item" onClick={addCustomItem}>
            <Plus size={14} /> Adicionar
          </button>
        </div>
      </div>

      <div className="catalog-tools">
        {categories.map((cat) => (
          <button
            className={category === cat ? "chosen" : ""}
            key={cat}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="items-catalog">
        {visible.map((item) => (
          <div key={item.name} className="item-card">
            <div className="item-header">
              <div className="item-title">
                <h4>{item.name}</h4>
                <span className="item-price">{formatGold(item.price)}</span>
              </div>
            </div>
            <p className="item-description">{item.description}</p>
            {item.damage && item.damage !== "—" && (
              <div className="item-damage">
                <span>Dano: <strong>{item.damage}</strong></span>
                {item.type && <span className="damage-type">{item.type}</span>}
              </div>
            )}
            {item.ac && item.ac !== 2 && (
              <div className="item-ac">
                <span>CA: <strong>{item.ac}</strong></span>
              </div>
            )}
            <button
              className="item-buy"
              onClick={() => buy(item)}
              disabled={goldToCents(character.gold) < goldToCents(item.price)}
            >
              <Plus size={14} /> Comprar
            </button>
          </div>
        ))}
      </div>

      {inventoryItems.length > 0 && (
        <div className="equipment-list">
          <h3>Inventário ({inventoryItems.length} itens)</h3>
          <div className="inventory-items">
            {inventoryItems.map((item) => (
              <div key={item.id} className="inventory-item">
                <div className="inventory-item-info">
                  <strong>{item.name}</strong>
                  <small>{item.source}</small>
                </div>
                <div className="inventory-item-actions">
                  <span className="item-count">×{item.quantity}</span>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    title="Remover item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
