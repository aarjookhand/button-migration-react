import React from "react";

// reusable, customizable button component with default properties for when the new values aren't passed
const MyButton = ({
    size = "md" ,  // default meduim size button
    variant = "solid", // default solid button
    colorScheme = "black", // default black schemed button
    leftIcon,  // optional icon to appear on the left of the button text
    rightIcon, // optional icon to appear on the right of the button text
    isLoading = false, // indicates if the button is in a loading state
    isDisabled = false, // indciates if the button is disabled
    children,  // content isnide the button
    ...props  // additional props such as onCLick handler
}) => {

    // base css classes for consistent structure of the button
    const baseClass = "flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none";

    // dynamic variants of the button based on the colorScheme
    // however, dynamic classes like `bg-${colorScheme}-600` do not work with the color "black" since it is not part of Tailwind's palette scaling system (which is based on numerical shades like 100, 200, etc.) 
    // hence, custom static classes are explicitly defined for "black" to ensure consistent styling.
    const variantClasses = {
        solid: colorScheme === 'black'
            ? `bg-black text-white hover:bg-gray-800` // black variant with hover effect
            : `bg-${colorScheme}-600 text-white hover:bg-${colorScheme}-500`, // dynamic color scheme based on palette
        subtle: colorScheme === 'black'
            ? `bg-gray-100 text-gray-800 hover:bg-gray-200` // subtle black variant
            : `bg-${colorScheme}-100 text-${colorScheme}-800 hover:bg-${colorScheme}-200`, // dynamic subtle scheme
        surface: colorScheme === 'black'
            ? `bg-gray-100 text-gray-800 border-2 border-gray-200 hover:bg-gray-200` // surface black variant
            : `border-2 border-${colorScheme}-200 bg-${colorScheme}-100 text-${colorScheme}-800 hover:bg-${colorScheme}-200`, // dynamic surface scheme
        outline: colorScheme === 'black'
            ? `border-2 border-gray-200 text-gray-800 hover:bg-gray-100` // black outlined variant
            : `border-2 border-${colorScheme}-200 text-${colorScheme}-800 hover:bg-${colorScheme}-100`, // dynamic outline
        ghost: colorScheme === 'black'
            ? `bg-transparent text-gray-800 hover:bg-gray-100` // trasnparent outline with black text
            : `bg-transparent text-${colorScheme}-800 hover:bg-${colorScheme}-100`, // dynamic ghost scheme
        plain: `bg-transparent text-${colorScheme}-800`, // plain transparent button

    };

    // dynamic size classes with dimensions and text sizes variation
    const sizeClasses = {
        xs: "h-6 px-2 text-xs rounded-md",    
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-md rounded-md",
        lg: "h-12 px-6 text-lg rounded-lg",
        xl: "h-14 px-8 text-xl rounded-lg",
    };


    const disabledClasses = isDisabled ? " cursor-not-allowed" : ""; // disables pointer events if disabled
    const loadingClasses = isLoading ? "cursor-wait" : ""; // displays a waiting cursor if loading


    // spinner size mapping for the loading state based on the button size
    const spinnerSizeClasses = {
        xs: "w-4 h-4",
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-7 h-7",
        xl: "w-8 h-8",
    };


    // rendering the button element
    return (
        <button
        // dynamically adding variant, size, states for styling
        className={`${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${loadingClasses}`}
        // disabling button if it is either in a disabled state or a loading state
        disabled={isDisabled || isLoading}
        
        // spreading additional properties (onCLick)
        {...props}
        >
        {isLoading ? (
            // if the button is in a loading state, show a spinner instead of the usual content
            <div className={`w-full h-full flex justify-center items-center`}> 
            
            <div 
            // spinning animation for the laoding state
            className={`${spinnerSizeClasses[size]} border-4 border-t-transparent border-grey animate-spin rounded-full`} />
        </div>
        ) : (
            // rendering the buttons children along with the optional left and right icons if the state is not loading
            <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children} 
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </>
        )}
        </button>
    );
};

// exporting the component for further reuse
export default MyButton;
