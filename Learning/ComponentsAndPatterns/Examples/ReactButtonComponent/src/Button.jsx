export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
}) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-4 flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white focus:ring-blue-300",
    secondary:
      "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-900 focus:ring-gray-300",
    outline:
      "border-2 border-blue-600 hover:bg-blue-50 text-blue-600 focus:ring-blue-300",
    ghost:
      "hover:bg-gray-100 active:bg-gray-200 text-gray-700 focus:ring-gray-200",
    danger:
      "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white focus:ring-red-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled || loading ? "opacity-50 cursor-not-allowed" : "active:scale-95"}
    ${className}
  `.trim();

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
