import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { 
  FaArrowLeft as arrowLeft,
  FaArrowRight as arrowRight,
  FaCheck as check,
  FaSearch as search,
  FaPlus as add,
} from 'react-icons/fa'; // Importando os ícones com apelidos

// Mapeando os apelidos dos ícones
const iconMap = {
  arrowLeft,
  arrowRight,
  check,
  search,
  add,
};

const buttonVariants = cva(
  "h-42 px-4 py-2 flex items-center rounded-3xl bg-[#006ACB] text-[#F0F2F5] hover:opacity-85",
  {
    variants: {
      variant: {
        default: "bg-[#006ACB] text-[#F0F2F5]",
        light: "bg-[#2C9AFF] text-[#F0F2F5]",
        dark: "bg-[#003465] text-[#F0F2F5]",
        white: "bg-[#F0F2F5] text-[#006ACB]",
        outline: "bg-transparent border border-[#006ACB] text-[#006ACB]",
        destructive: "bg-transparent border border-[#8E98A8] text-[#8E98A8] hover:bg-[#003465] hover:text-[#2C9AFF] hover:border-[#2C9AFF]",   
      },
      size: {
        default: "",
        sm: ""
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    }
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  iconLeft?: keyof typeof iconMap; // Permite passar o nome do ícone à esquerda
  iconRight?: keyof typeof iconMap; // Permite passar o nome do ícone à direita
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))} 
        {...props}
      >
        {iconLeft && <span className="mr-2">{iconMap[iconLeft]({})}</span>} {/* Adiciona ícone à esquerda */}
        {children}
        {iconRight && <span className="ml-2">{iconMap[iconRight]({})}</span>} {/* Adiciona ícone à direita */}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
