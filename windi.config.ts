import colors from "windicss/colors";
import { defineConfig } from "windicss/helpers";
export default defineConfig({
  theme: {
    colors: {
      ...colors,
      main: {
        400: "#fc96ff",
      },
    },
  },
});
