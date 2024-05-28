// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    dimmedTextColor: string;
    loader: {
      mainColor: string;
      backgroundColor: string;
    };
    error: {
      backgroundColor: string;
      borderColor: string;
    };
    table: {
      borderColor: string;
      headerBackgroundColor: string;
      altRowBackgroundColor: string;
    };
    form: {
      borderColor: string;
    };
  }
}
