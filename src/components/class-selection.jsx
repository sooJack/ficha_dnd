import { Check } from "lucide-react";
import { Card } from "./ui";

export default function ClassSelection({ character, update, classCatalog, startingEquipment }) {
  return (
    <div className="cards-grid">
      {classCatalog.map((item) => (
        <Card
          key={item.id}
          selected={character.classId === item.id}
          onClick={() => update({
            classId: item.id,
            subclass: "",
            spells: [],
            equipment: character.goldRolled
              ? (character.equipment || []).filter((entry) => !entry.id?.toString().startsWith("starting-"))
              : [
                  ...startingEquipment(item.id, character.background),
                  ...(character.equipment || []).filter((entry) => !entry.id?.toString().startsWith("starting-")),
                ],
          })}
        >
          <img className="option-image" src={item.image} alt={`Ilustração de ${item.name}`} />
          <div className="card-body">
            <div className="card-title">
              <h3>{item.name}</h3>
              {character.classId === item.id && <Check size={19} />}
            </div>
            <p>{item.text}</p>
            <div className="tags">
              <span>{item.category}</span>
              <span>d{item.die} de vida</span>
              <span>{item.main}</span>
              {item.caster && <span className="gold">Conjurador</span>}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
