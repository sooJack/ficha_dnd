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

  const removeItem = (itemId) => {
    update({
      equipment: character.equipment.filter((item) => item.id !== itemId),
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

  const visible =
    category === "Todos"
      ? itemCatalog
      : itemCatalog.filter((item) => item.category === category);

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

      {character.equipment.length > 0 && (
        <div className="equipment-list">
          <h3>Inventário ({character.equipment.length} itens)</h3>
          <div className="inventory-items">
            {character.equipment.map((item) => (
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
