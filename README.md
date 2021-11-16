## 🏥　Sorry, but currently under maintenance. Please wait a few days.　🏥

# React Spinner Overlay

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

[Demo page](https://arisaokasaka.github.io/react-spinner-overlay/)

## Installation

yarn: 
```
yarn add react-spinner-overlay
```

npm: 
```
npm install react-spinner-overlay
```

## Usage
There are mainly two usages. You have to prepare loading boolean state or boolean variables.

**A. Pass loading(boolean) prop to spinner**
```
import { CircleSpinnerOverlay, FerrisWheelSpinner } from 'react-spinner-overlay'

...

  const [loading, setLoading] = useState<boolean>(true)

...

  return (
    <>
      <FerrisWheelSpinner loading={loading} />
      <CircleSpinnerOverlay loading={loading} />
    </>
  )

```

**B. Switch components**
```

import { FerrisWheelSpinner } from 'react-spinner-overlay'

...

  return (
    <>
      {loading
        ? <FerrisWheelSpinner loading={loading} />
        : <p>loaded!</p>
      }
    </>
  )
```


## Props of each spinner/overlay

### CircleSpinner

| prop | type | default |
| --- | --- | --- |
| `loading` | `boolean` | `true` |
| `size` | `number` | `42` |
| `color` | `string` | `#00ced1` |
| `innerBorderWidth` | `number` | `6` |
| `outerBorderWidth` | `number` | `1` |
| `innerBorderOpacity` | `number` | `1` |
| `outerBorderOpacity` | `number` | `1` |


