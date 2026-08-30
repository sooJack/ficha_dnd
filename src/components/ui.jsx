import { Check } from "lucide-react";

export function Card({ children, selected, onClick, className = "" }) {
  return <article className={`card ${selected ? "selected" : ""} ${onClick ? "clickable" : ""} ${className}`.trim()} onClick={onClick}>{children}</article>;
}
export function StepButton({ children, icon: Icon, variant = "secondary", ...props }) {
  return <button className={`button ${variant}`} {...props}>{Icon && <Icon size={16} />}{children}</button>;
}
export function SelectedMark({ selected }) { return selected ? <Check size={19} /> : null; }
