import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export interface NavLink {
  label: string;
  href?: string;
  dropdown?: {
    items: { label: string; href: string }[];
  };
}

interface MobileNavItemProps {
  link: NavLink;
  onClose: () => void;
}

export function MobileNavItem({ link, onClose }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = !!link.dropdown;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-gray-900 font-medium text-base"
        onClick={() => (hasDropdown ? setIsOpen((prev) => !prev) : undefined)}
      >
        {hasDropdown ? (
          <span>{link.label}</span>
        ) : (
          <Link
            to={link.href ?? '/'}
            onClick={onClose}
            className="flex-1 text-left"
          >
            {link.label}
          </Link>
        )}

        {hasDropdown && (
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>

      {/* Accordion body */}
      {hasDropdown && (
        <div
          className={`overflow-hidden transition-all duration-250 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-3 pl-3 flex flex-col gap-1">
            {link.dropdown!.items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={onClose}
                className="py-2.5 px-3 text-gray-600 text-sm rounded-md hover:bg-gray-50 hover:text-brand-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
