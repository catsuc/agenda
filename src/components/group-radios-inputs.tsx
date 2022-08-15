import { RadioGroup } from "@headlessui/react"
import { useState } from "react";

export default function RadioGroupInputs() {
  const [selected, setSelected] = useState<string>('yellow')

  const options = {
    yellow: 'bg-[#edc36f] border-[#edc36f] h-8 rounded-md',
    pink: 'bg-[#FF91C4] border-[#FF91C4] h-8 rounded-md',
    blue: 'bg-[#76D6FC] border-[#76D6FC] h-8 rounded-md',
    lines:
      'border-[#d1d5db] rounded-md bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,#d1d5db_12px,#d1d5db_24px)] border',
  };

  function calculeClasses(value: string) {
    return [selected === value ? 'flex-[3]' : 'flex-1', 'transition-all cursor-pointer'].join(' ');
  }

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <div className="flex gap-2 mt-1">
        {Object.keys(options).map((key) => (
          <RadioGroup.Option key={key} className={`${calculeClasses(key)} ${options[key]} `} value={key}>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
