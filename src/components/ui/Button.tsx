import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  href?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', as = 'button', href, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm";

    const variantClasses = {
      primary: "bg-accent text-base-white hover:bg-accent/90 hover:shadow-md border border-accent",
      secondary: "border-2 border-accent bg-base-white text-accent hover:bg-accent hover:text-base-white hover:shadow-md",
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

    if (as === 'a') {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          // The type assertion for ref is complex for polymorphic components.
          // For this project's scope, we can omit passing the ref to the anchor tag.
        >
          {children}
        </a>
      );
    }

    return (
      <button className={combinedClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 