# twistify

**twistify** is a simple React component library that provides customizable loaders for your React and Next.js applications. The library is designed to be easy to use and highly customizable to fit the design of your application.

## Installation

You can install twistify via npm:

```bash
npm install twistify
```

## Usage


To use the BasicLoader component from twistify in your React application, follow these steps:

Import the BasicLoader component into your desired file.
Customize the loader using the available props.

Here’s an example of how to use the BasicLoader:

```
import { BasicLoader } from 'twistify';

function App() {
  return (
    <>
      <BasicLoader size='small' bgColor='gray' spinnerColor='white' />
    </>
  );
}
```

## Props for BasicLoader
The BasicLoader component supports the following props:

size (string): Defines the size of the loader. Accepts 'small', 'medium', or 'large'.
```
Example: 'small'
```

bgColor (string): Sets the background color of the loader's border.
```
Example: 'gray', '#ddd', 'rgb(200,200,200)'
```


spinnerColor (string): Sets the color of the spinning part of the loader.

```
Example: 'white', '#3498db', 'rgba(255, 255, 255, 0.8)'
```
Example:

Here’s how the BasicLoader will render with different props:

```
<BasicLoader />
<BasicLoader size='large' bgColor='#ddd' spinnerColor='#3498db' />
<BasicLoader size='medium' bgColor='gray' spinnerColor='white' />
<BasicLoader size='small' bgColor='black' spinnerColor='yellow' />
```

## Customization
You can customize the BasicLoader by combining the size, bgColor, and spinnerColor props to match the design of your application. The loader will adapt its size and colors accordingly.

## License

twistify is licensed under the MIT License. See the LICENSE file for more details.

```

This `README.md` provides a clear overview of the `twistify` library, instructions for installation and usage, details about the available props, and an invitation for contributions. As your library evolves, you can update the README to reflect new components or features.
```