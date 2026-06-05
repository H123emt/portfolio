import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
  secondary:
    "border border-white/20 hover:border-primary/60 text-white bg-white/5 hover:bg-primary/10 backdrop-blur-sm",
  ghost: "text-primary hover:text-primary-light hover:bg-primary/10",
  danger: "bg-accent hover:bg-red-400 text-white shadow-lg shadow-accent/25",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  href,
  target,
  onClick,
  disabled,
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl font-body font-medium transition-all duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/50";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
