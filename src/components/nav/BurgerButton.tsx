interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="lg:hidden nav-burger w-10 h-10 flex flex-col justify-center items-center gap-[5px] text-white"
    >
      <span
        className={`burger-line ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
      />
      <span
        className={`burger-line ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
      />
      <span
        className={`burger-line ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
      />
    </button>
  );
}
