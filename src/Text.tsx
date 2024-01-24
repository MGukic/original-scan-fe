import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

export const TextStyle = [
  "Header H1 800",
  "Header H2 700",
  "Header H3 700",
  "Header H4 700",
  "Header H4 500",
  "Body large 500",
  "Body large 400",
  "Body medium 700",
  "Body medium 500",
  "Body medium 400",
  "Body small 600",
  "Body xsmall 700",
  "Body xsmall 600",
  "Body xsmall 500",
  "Status bar 700",
] as const;
type TextStyle = (typeof TextStyle)[number];

export const TextColors = [
  "red",
  "green",
  "white",
  "black",
  "gray",
  "blue",
  "error",
] as const;

type TextColors = (typeof TextColors)[number];
const defaultElement = "span";
const defaultHTMLElement = new Map<TextStyle, React.ElementType>([
  ["Header H1 800", "h1"],
  ["Header H2 700", "h2"],
  ["Header H3 700", "h3"],
  ["Header H4 700", "h4"],
  ["Header H4 500", "h4"],
  ["Body large 500", "p"],
  ["Body large 400", "p"],
  ["Body medium 700", "p"],
  ["Body medium 500", "p"],
  ["Body medium 400", "p"],
  ["Body small 600", "p"],
  ["Body xsmall 700", "p"],
  ["Body xsmall 600", "p"],
  ["Body xsmall 500", "p"],
  ["Status bar 700", "p"],
]);

type TextProps = {
  /**
   * Type determines html tag and its font styles
   * Font Sizes:
   * h1 - 48px
   * h2 - 36px
   * h3 - 32px
   * h4 - 24px
   * h4 - 24px
   * p - 18px
   * p - 16px
   * p - 16px
   * p - 16px
   * p - 14px
   * p - 14px
   * p - 12px
   * p - 10px
   */

  type?: TextStyle;
  /**
   * If text is required to have different color than default.
   * Class 'u-text--color-colorName' will be created so it can be styled outside this component
   */
  color?: TextColors;

  /**
   * Use bold or light variant of font
   */
  medium?: boolean;
  /**
   * Use semi-bold variant of font
   */
  regular?: boolean;
  /**
   * Text align style property
   */
  align?: "left" | "right" | "center";
  /**
   * Specify html element used to create text component
   */
  as?: React.ElementType;
} & HTMLAttributes<HTMLOrSVGElement>;

const TextComponent: FunctionComponent<TextProps> = ({
  type = "Header H1 800",
  as: Component = defaultHTMLElement.get(type) || defaultElement,
  children,
  className,
}: TextProps) => <Component className={className}>{children}</Component>;

export const Text = styled(TextComponent)<TextProps>`
  ${({ type = "Header H1" }) => {
    switch (type) {
      case "Header H1 800":
        return `
        font-size: 60px;
        font-weight: 400;
        line-height: 54px;
        font-family: Alta-Regular;
      `;

      case "Header H2 700":
        return `
        font-size: 36px;
        font-weight: 700;
        line-height: 42px;
        font
      `;

      case "Header H3 700":
        return `
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        font
      `;

      case "Header H4 700":
        return `
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.3px;
        font
      `;

      case "Header H4 500":
        return `
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.3px;
        font
      `;

      case "Body large 500":
        return `
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        font
      `;

      case "Body large 400":
        return `
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        font
      `;

      case "Body medium 700":
        return `
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        font
      `;
      case "Body medium 500":
        return `
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        font
      `;

      case "Body medium 400":
        return `
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        font
      `;

      case "Body small 600":
        return `
        font-weight: 600;
        font-size: 16px;
        line-height: 19.2px;
      `;

      case "Body xsmall 700":
        return `
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        font
      `;

      case "Body xsmall 600":
        return `
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        font
      `;

      case "Body xsmall 500":
        return `
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        font
      `;

      case "Status bar 700":
        return `
        font-weight: 700;
        font-size: 10px;
        line-height: 16px;
        font
      `;
    }
  }}

  color: ${({ color, theme }) => {
    switch (color) {
      case "red":
        return theme.textRed;
      case "green":
        return theme.textGreen;
      case "white":
        return theme.textColorLight;
      case "black":
        return "#140B0C";
      case "gray":
        return theme.textGray;
      case "blue":
        return theme.textBlue;
      case "error":
        return theme.textError;
      default:
        return theme.textColorDark;
    }
  }};

  ${({ medium, regular }) => {
    return `font-weight: ${medium ? 500 : regular && 400};`;
  }};
  ${({ align }) => {
    return align && `text-align: ${align}`;
  }};
  justify-content: ${({ align }) => {
    switch (align) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
        return "center";
    }
  }};
`;
