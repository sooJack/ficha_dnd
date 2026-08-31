import { useState } from "react";
import { Check, Search } from "lucide-react";
import { Card } from "./ui";

export default function Spells({ character, update, selectedClass, spellCatalog, maxSpellLevel, spellSelectionLimits, spellDamage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const available = selectedClass?.caster
    ? spellCatalog.filter(
        (spell) =>
          spell.level === 0 ||
          spell.level <= maxSpellLevel(character.classId, character.level)
      )
    : [];

  const selected = character.spells || [];
  const limits = spellSelectionLimits(character);

  const toggle = (spell) => {
    const has = selected.includes(spell.name);
    const category = spell.level === 0 ? "cantrips" : "spells";
    const current = selected.filter(
      (name) =>
        (available.find((entry) => entry.name === name)?.level === 0) ===
        (category === "cantrips")
    );
    if (!has && current.length >= limits[category]) return;
    update({
      spells: has
        ? selected.filter((name) => name !== spell.name)
        : [...selected, spell.name],
    });
  };

  // Filtrar spells baseado no termo de busca
  const filteredAvailable = available.filter((spell) =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const levels = [...new Set(filteredAvailable.map((spell) => spell.level))].sort(
    (a, b) => a - b
  );

  return (
    <div className="spell-selection">
      {!selectedClass?.caster && (
        <div className="callout wide">
          Esta classe não possui magias nesta ficha.
        </div>
      )}

      {selectedClass?.caster && (
        <>
          <div className="section-title">
            <div>
              <span className="eyebrow">Escolha geral</span>
              <h3>Magias e truques selecionados</h3>
            </div>
            <strong>
              Truques{" "}
              {
                selected.filter(
                  (name) =>
                    available.find((spell) => spell.name === name)?.level === 0
                ).length
              }
              /{limits.cantrips} · Magias{" "}
              {
                selected.filter(
                  (name) =>
                    available.find((spell) => spell.name === name)?.level > 0
                ).length
              }
              /{limits.spells}
            </strong>
          </div>

          {/* Barra de busca */}
          <div className="search-container" style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#f5f5f5",
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            >
              <Search size={20} style={{ color: "#666" }} />
              <input
                type="text"
                placeholder="Pesquisar por nome de magia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#999",
                    fontSize: "16px",
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {levels.length === 0 && searchTerm && (
            <div className="callout wide">
              Nenhuma magia encontrada com "{searchTerm}"
            </div>
          )}

          {levels.map((level) => (
            <section className="spell-level" key={level}>
              <div className="section-title">
                <div>
                  <span className="eyebrow">
                    {level === 0 ? "Cantrip" : `Círculo ${level}`}
                  </span>
                  <h3>
                    {level === 0 ? "Truques" : `Magias de nível ${level}`}
                  </h3>
                </div>
              </div>

              <div className="cards-grid feat-grid">
                {filteredAvailable
                  .filter((spell) => spell.level === level)
                  .map((spell) => {
                    const chosen = selected.includes(spell.name);
                    const damage = spellDamage(spell.damage);
                    return (
                      <Card
                        key={spell.name}
                        className="spell-card"
                        selected={chosen}
                        onClick={() => toggle(spell)}
                      >
                        <div className="card-body">
                          <div className="card-title">
                            <h3>{spell.name}</h3>
                            {chosen && <Check size={19} />}
                          </div>
                          <p className="spell-effect">
                            <strong>Como funciona:</strong> {spell.detail}
                          </p>
                          {damage && (
                            <div className="damage-box">
                              <span>Dano</span>
                              <strong>{damage.amount}</strong>
                              <small>{damage.type}</small>
                            </div>
                          )}
                          <div className="spell-meta">
                            <span>Escola: {spell.school}</span>
                            <span>Alcance: {spell.range || "toque"}</span>
                            <span>
                              Como faz: {spell.castingTime || "1 ação"}
                            </span>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
