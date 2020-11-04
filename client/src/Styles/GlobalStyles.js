import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    /* ${reset}; */
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        /* padding-top: 100px; */
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .centerR {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }
    .centerC {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`;
