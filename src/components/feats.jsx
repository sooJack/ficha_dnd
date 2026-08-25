import { Check, Sparkles } from "lucide-react";
import { Card } from "./ui";

export default function Feats({ character, update, feats, featSlots }) {
  const slots = featSlots(character); const selectedNames = character.feats.map((feat) => typeof feat === "string" ? feat : feat.name); const toggle = (feat) => { const has = selectedNames.includes(feat.name); if (!has && selectedNames.length >= slots) return; update({ feats: has ? selectedNames.filter((item) => item !== feat.name) : [...selectedNames, feat.name] }); };
  return <><div className="summary-row"><div><span>Talentos disponíveis</span><strong>{selectedNames.length}/{slots}</strong></div><div><span>Regra 5e</span><strong>{slots ? "Liberado" : "Nível 4"}</strong></div></div>{slots === 0 && <div className="callout feat-rule"><Sparkles size={18} /><span>Na regra da 5e, o primeiro talento fica disponível no nível 4.</span></div>}<div className="cards-grid feat-grid">{feats.map((feat) => { const selected = selectedNames.includes(feat.name); return <Card key={feat.name} selected={selected} onClick={() => toggle(feat)}><div className="card-title"><h3>{feat.name}</h3>{selected && <Check size={19} />}</div><p>{feat.text}</p><div className="tags"><span>{feat.category}</span><span>{slots === 0 ? "Bloqueado até o nível 4" : "Disponível"}</span></div></Card>; })}</div></>;
}
