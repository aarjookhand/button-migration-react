
# React Button Component with TailwindCSS

This project features a **React button component** using **TailwindCSS**, offering customizable properties like size, color scheme, variant, icon, and states.


## Installation

1. Clone the repository:

```bash
git clone https://github.com/aarjookhand/button-migration-react.git
```

2. Install dependencies:

```bash
cd button-migration-react
cd frontend
npm install
```

3. Start the development server:

```bash
npm run start
```

## Usage

The `MyButton` component is a customizable button built with React and styled using TailwindCSS. It allows you to adjust its appearance and behavior dynamically by passing different props. Below is an example of how to use the button and customize it according to your needs.

### Basic Usage

```jsx
import MyButton from './components/MyButton';

// Example usage with basic props
<MyButton
  colorScheme="purple" // set the button's color scheme (options: black, red, green, blue, teal, pink, purple, cyan, orange, yellow)
  size="sm"  // set the button's size (options: xs, sm, md, lg, xl)
  variant="solid"  // set the button's style (options: solid, subtle, surface, outline, ghost, plain)
  isLoading={false} // button loading state (true or false)
  isDisabled={false} // button disabled state (true or false)
>
  Button
</MyButton>
```

### Available Options for `MyButton` Props:

(all the props are optional as there is a pre set default value for all)

- **`colorScheme`**: Defines the button's color.
  - Options: `"black"`, `"red"`, `"green"`, `"blue"`, `"teal"`, `"pink"`, `"purple"`, `"cyan"`, `"orange"`, `"yellow"`
  - Example: `"colorScheme="blue"`

- **`size`**: Defines the size of the button.
  - Options: `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`
  - Example: `"size="lg"`

- **`variant`**: Defines the button's visual style.
  - Options: `"solid"`, `"subtle"`, `"surface"`, `"outline"`, `"ghost"`, `"plain"`
  - Example: `"variant="solid"`

- **`isLoading`**: Specifies if the button should display a loading spinner.
  - Type: `boolean`
  - Example: `"isLoading={true}"`

- **`isDisabled`**: Specifies if the button should be disabled.
  - Type: `boolean`
  - Example: `"isDisabled={true}"`

- **`leftIcon`**: Provides a left-aligned icon within the button.
  - Type: `React.ReactNode` (any valid JSX element, such as an icon from FontAwesome or any other React component).
  - Example: `<FontAwesomeIcon icon={faPlay} />`

- **`rightIcon`**: Provides a right-aligned icon within the button.
  - Type: `React.ReactNode`
  - Example: `<FontAwesomeIcon icon={faArrowRight} />`

- **`children`** (required): The content inside the button. This can be any JSX element, such as text, images, etc.
  - Example: `"Click Me"`


## Challenges Faced

### 1. **Handling Dynamic Colors with TailwindCSS**

One of the key challenges was working with dynamic classes for the button's color scheme in TailwindCSS. TailwindCSS typically uses fixed color classes like `bg-blue-500` or `text-red-600`, but for this project, the button’s color scheme needed to be dynamic, based on user selection.

**Approach Taken:**
- Used the Tailwind `safelist` configuration in `tailwind.config.js` to ensure that dynamic classes, like `bg-${colorScheme}-600` and `hover:bg-${colorScheme}-500`, were not purged by Tailwind’s purging mechanism during production builds.
- For colors that didn't fit well with Tailwind's numeric scaling (e.g., `black`), we manually defined the appropriate color and hover classes to ensure consistency.

### 2. **Ensuring Responsiveness with TailwindCSS**

TailwindCSS makes it easy to build responsive components, but managing dynamic properties like size and state (loading/disabled) in a responsive manner required careful planning. For example, different spinner sizes and button sizes needed to be dynamically adjusted based on the size of the button.

**Approach Taken:**
- Used Tailwind’s utility classes (e.g., `w-4 h-4`, `px-2`, `text-sm`) to dynamically set the appropriate values for button sizes and spinner sizes based on the button’s props.
- Used Tailwind's responsive utilities to ensure the button and its content adapt to various screen sizes, ensuring a consistent user experience.

### 3. **Complexity in Handling Loading and Disabled States**

The `isLoading` and `isDisabled` states required dynamic styling for cursor changes and the inclusion of a loading spinner. Managing these states with TailwindCSS in a type-safe way, while ensuring the correct visual feedback for users, was a challenge.

**Approach Taken:**
- Used conditional classes to apply appropriate styles when the button was in a loading or disabled state (`cursor-not-allowed`, `cursor-wait`).
- A spinner component was conditionally rendered when the button was in the loading state, and we dynamically set its size using Tailwind classes (`w-4 h-4`, `w-5 h-5`, etc.) based on the `size` prop.

