import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "./ui";

export default function SubclassSelection({ character, update, selectedClass, subclassCatalog, subclassLevelData, abilityCatalog }) {
  const options = subclassCatalog[character.classId] || [];
  const unlockLevel = subclassLevelData[character.classId] || 3;
  const unlocked = character.level >= unlockLevel;
  const [expanded, setExpanded] = useState(character.subclass || "");

  return (
    <div className="cards-grid">
      {!selectedClass && <div className="callout wide">Escolha uma classe primeiro.</div>}
      {selectedClass && !unlocked && <div className="callout wide">Subclasses são liberadas no nível {unlockLevel}.</div>}
      {options.map((option) => (
        <div className="subclass-option" key={option.name}>
          <Card
            selected={character.subclass === option.name}
            onClick={() => {
              if (!unlocked) return;
              setExpanded(expanded === option.name ? "" : option.name);
              update({ subclass: option.name });
            }}
          >
            <img
              className="option-image"
              src={option.image}
              alt={`Ilustração de ${option.name}`}
              onError={(event) => { event.currentTarget.src = `${import.meta.env.BASE_URL}images/${option.fallback}.jpg`; }}
            />
            <div className="card-body">
              <div className="card-title">
                <h3>{option.name}</h3>
                {character.subclass === option.name && <Check size={19} />}
              </div>
              <p>{option.detail}</p>
              <div className="tags"><span>{unlocked ? "Disponível" : "Bloqueada"}</span><span>{expanded === option.name ? "Ocultar habilidades" : "Ver habilidades"}</span></div>
            </div>
          </Card>
          {expanded === option.name && unlocked && (
            <div className="subclass-abilities">
              <h4>Habilidades por nível</h4>
              {(abilityCatalog[character.classId]?.[option.name] || []).map((ability) => (
                <div className={ability.level <= character.level ? "ability-unlocked" : "ability-locked"} key={`${option.name}-${ability.level}-${ability.name}`}>
                  <strong>Nível {ability.level}</strong>
                  <span>{ability.name}</span>
                  <p>{ability.detail}</p>
                  <small>{ability.level <= character.level ? "Já ganhou" : "Vai ganhar"}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
