import { useRef, useEffect, useState } from "react";

import * as Base from '@/views/ui/dropdown-menu';

import { cn } from "@/utils/react";

import { empower } from "./utils/empower.utils";

interface ContentEditableProps {
  className?: string;
  fieldClassName?: string;
  value: string;
  placeholder?: string;
  options?: string[];
  disabled?: boolean
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const ContentEditable: React.FC<ContentEditableProps> = (props) => {
  const [value, setValue] = useState(props.value);
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const field = useRef<HTMLDivElement>(null);

  const onChange = (value: string) => {
    props.onChange?.(value.trim());

    const val = value.toLowerCase();

    const list = (props.options || []).filter((option) => {
      option = option.toLowerCase();

      return option.includes(val) && option !== val;
    });

    setValue(value);
    setSuggestions(list);
    setIsOpen(!!value && !!list.length);
  };

  const onSelect = (value: string) => {
    field.current!.textContent = value;

    setValue(value);
    setSuggestions([]);
    setIsOpen(false);
  };

  useEffect(() => empower(field.current!), []);

  return (
    <div className={cn("relative", props.className)}>
      <Base.DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <Base.DropdownMenuTrigger asChild>
          <div className={cn(
            props.fieldClassName,
            "absolute top-0 left-0 w-full h-full pointer-events-none",
            value === '' || value === '<br>' ? "text-foreground/40" : "text-transparent",
          )}>
            {props.placeholder}
          </div>
        </Base.DropdownMenuTrigger>
        <div
          key="contenteditable"
          ref={field}
          className={cn(
            props.fieldClassName,
            "w-full h-full break-all cursor-text",
            "focus:outline-0 focus:relative focus:border-primary focus:z-1",
          )}
          data-placeholder={props.placeholder}
          contentEditable={!props.disabled}
          suppressContentEditableWarning={true}
          onInput={() => onChange(field.current!.textContent ?? "")}
          onFocus={() => onChange(field.current!.textContent ?? "")}
        >
          {props.value}
        </div>
        {!!suggestions.length && <Options value={value} options={suggestions} onSelect={onSelect} />}
      </Base.DropdownMenu>
    </div>
  );
};

interface OptionsProps {
  value: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Options: React.FC<OptionsProps> = (props) => {
  const preventAutoFocus = {
    onCloseAutoFocus: (e: Event) => e.preventDefault(),
    onOpenAutoFocus: (e: Event) => e.preventDefault(),
  };

  return (
    <Base.DropdownMenuPortal>
      <Base.DropdownMenuContent
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
        {...preventAutoFocus}
      >
        {props.options.map((option) => (
          <Base.DropdownMenuItem
            key={option}
            className="cursor-pointer"
            onClick={() => props.onSelect(option)}
          >
            {option}
          </Base.DropdownMenuItem>
        ))}
      </Base.DropdownMenuContent>
    </Base.DropdownMenuPortal>
  );
};
