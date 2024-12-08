import React from 'react';
import MyButton from './components/MyButton';
import ButtonModifier from './components/ButtonModifier';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay  } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // function to open the Deezer website in a new browser
  const openDeezer = () => {
    window.open('https://www.deezer.com', '_blank');
  };

  // rendering the apps main UI (the button)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    {/* main Container: card for the button */}
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-center mb-4">
        <MyButton
          rightIcon={<FontAwesomeIcon icon={faPlay} />} // passing the play icon as a right-aligned icon
          size="sm"  // setting the button size to small
          variant="solid" // passing the button variant
          colorScheme="purple" // passing the color scheme
          onClick={openDeezer} // attaching click handler to open the site
        >
          LIVE THE MUSIC, JOIN DEEZER NOW
        </MyButton>
      </div>
      <div className="text-center text-gray-600">
        <p className="text-sm">Click to explore Deezer.</p>
      </div>
    </div>
          {/* card for Button Modifier */}
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-6">See what the button looks like in UI</h2>
        <ButtonModifier />  {/* ButtonModifier component to adjust button settings */}
      </div>
    </div>
  );
};

export default App;

