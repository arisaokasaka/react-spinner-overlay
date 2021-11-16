# React Spinner Overlay

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


![スクリーンショット 2021-11-16 22 44 19](https://user-images.githubusercontent.com/68284764/141996652-6cb38080-163f-469d-9851-25231151523a.png)


## 🚀 Demo

[Demo page](https://arisaokasaka.github.io/react-spinner-overlay/)

---

## 💫 Installation

yarn: 
```
yarn add react-spinner-overlay
```

npm: 
```
npm install react-spinner-overlay
```

---

## 📌 Usage
There are mainly two usages. You have to prepare loading boolean state or boolean variables.

**A. Pass loading(boolean) prop to spinner**
```
import { CircleSpinnerOverlay, FerrisWheelSpinner } from 'react-spinner-overlay'

...

  const [loading, setLoading] = useState<boolean>(true)

...

  return (
    <>
      <FerrisWheelSpinner loading={loading}　size={28} />
      <CircleSpinnerOverlay
      　　loading={loading} 
       overlayColor="rgba(0,153,255,0.2)"
      />
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
        ? <FerrisWheelSpinner loading={loading}　color="#FF7626" />
        : <p>loaded!</p>
      }
    </>
  )
```

---

## 🎗 Props of each spinner/overlay

### CircleSpinner

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `42` | px |
| `color` | `string` | `#00ced1` | |
| `innerBorderWidth` | `number` | `6` | |
| `outerBorderWidth` | `number` | `1` | |
| `innerBorderOpacity` | `number` | `1` | |
| `outerBorderOpacity` | `number` | `1` | |


### LineLoader

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `width` | `number` | `60` | px |
| `height` | `number` | `4` | px |
| `color` | `string` | `#00ced1` | |
| `bgOpacity` | `number` | `0.3` | |
| `borderRadius` | `number` | `10` | px |


### RingSpinner

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `42` | px |
| `color` | `string` | `#00ced1` |  |
| `borderWidth` | `number` | `2` | px |


### FerrisWheelSpinner

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `32` | px |
| `color` | `string` | `#00ced1` |  |


### WindmillSpinner

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `40` | px |
| `color` | `string` | `#00ced1` |  |
| `borderWidth` | `number` | `4` | px |
| `borderHeight` | `number` | `10` | px |
| `borderRadius` | `number` | `8` | px |


### RouletteSpinner

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `32` | px |
| `color` | `string` | `#00ced1` |  |


### DartsSpinner

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `48` | px |
| `color` | `string` | `#00ced1` |  |


### DotLoader

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `size` | `number` | `12` | px |
| `color` | `string` | `#00ced1` |  |
| `between` | `number` | `3` | px |



### BounceLetterLoader

| prop | type | default | note |
| --- | --- | --- | --- |
| `loading` | `boolean` | `true` | |
| `letters` | `string` | `Loading...` | |
| `color` | `string` | `#00ced1` |  |
| `animationDuration` | `number` | `2` | second |


### Overlay
All overlays (`BounceLetterLoaderOverlay`, `CircleSpinnerOverlay`, `DartsSpinnerOverlay`, `DotLoaderOverlay`, `FerrisWheelSpinnerOverlay`, `LineLoaderOverlay`, `RouletteSpinnerOverlay`, `RingSpinnerOverlay`, `WindmillSpinnerOverlay`) **have their own spinner props**, plus the following props.


| prop | type | default |
| --- | --- | --- |
| `overlayColor` | `string` | `rgb(255 255 255 / 80%)` |
| `message` | `string or JSX.Element` | |
| `zIndex` | `number` | `500` |

