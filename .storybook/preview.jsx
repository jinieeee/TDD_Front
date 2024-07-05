import {GlobalStyles} from "../src/styles/GlobalStyles";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
        <>
          <GlobalStyles />
          <Story />
        </>
    )
  ]
};


export default preview;
