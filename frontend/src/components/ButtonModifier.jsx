import React, {useState} from "react";
import MyButton from "./MyButton";
const ButtonModifier = () => {
    // state hooks to control the button's properties
    const [colorScheme, setColorScheme] = useState("black"); // default color scheme set to black
    const [size, setSize] = useState("md");  // default size set to medium
    const [variant, setVariant] = useState("solid"); // default variant set to solid
    const [isLoading, setIsLoading] = useState(false); // button loading state, default set to false
    const [isDisabled, setIsDisabled] = useState(false); // button disabled state, default set to false
    
  
    return (
        <div className="flex h-screen">
        {/* Left side: Button */}
        <div className="flex-1 flex items-stretch justify-center">
            {/* MyButton component with dynamic properties controlled by state */}
          <MyButton
            colorScheme={colorScheme} // set color scheme based on state
            size={size} // dynamically set size based on state
            variant={variant} // set button variant based on state
            isLoading={isLoading} // show loading spinner if true
            isDisabled={isDisabled} // disable button if true
          >
            Button
          </MyButton>
        </div>
        <div className="flex-1 p-6">
            <div className="space-y-4">
            {/* dropdown for selecting color scheme */}
            <div>
                <label>Color Scheme:</label>
                <select onChange={(e) => setColorScheme(e.target.value)} value={colorScheme} className="p-2">  
                    {/* options for different color schemes */}                  
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="teal">Teal</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="cyan">Cyan</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
            {/* dropdown for selecting button size */}
            <div>
                <label>Size:</label>
                <select onChange={(e) => setSize(e.target.value)} value={size} className="p-2">
                    <option value="xs">Extra Small</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                </select>
            </div>
  
            {/* Dropdown for selecting button variant */}
            <div>
            <label>Variant:</label>
            <select onChange={(e) => setVariant(e.target.value)} value={variant} className="p-2">
                <option value="solid">Solid</option>
                <option value="subtle">Subtle</option>
                <option value="surface">Surface</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
                <option value="plain">Plain</option>
            </select>
            </div>
  
            {/* checkbox to toggle loading state */}
            <div>
                <label>Loading:</label>
                <input
                    type="checkbox"
                    checked={isLoading} // bind checkbox checked state to isLoading state
                    onChange={() => setIsLoading(!isLoading)} // toggle loading state on checkbox change
                />
            </div>
            {/* checkbox to toggle disabled state */}
            <div>
                <label>Disable:</label>
                <input
                    type="checkbox"
                    checked={isDisabled} // bind checkbox checked state to isDisabled state
                    onChange={() => setIsDisabled(!isDisabled)} // toggle disabled state on checkbox change
                />
            </div>
        </div>
     </div>
  
      </div>
    );
  };
  export default ButtonModifier;