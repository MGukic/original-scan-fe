import { useEffect, useRef, useState } from "react";
import { mapKeys } from "lodash";

export type IconNamesType = "ring-parfume";

export interface IconProps {
  name?: IconNamesType;
  color?: "currentColor" | "white" | "red" | "grey" | "offBlack" | "black";
  size?: 120 | 43 | 24 | 20 | 16 | 14 | 12;
  className?: string;
  id?: string;
}

const Icon = ({
  name,
  color = "currentColor",
  size = 24,
  id,
  className,
}: IconProps) => {
  const container = useRef<any>();
  const [icons, setIcons] = useState<any>(undefined);

  // Get the name of the icon without extension
  const getModuleName = (_: any, key: string) => {
    const path = key.split(/[/.]+/g);
    return path[path.length - 2];
  };

  useEffect(() => {
    const loadIcons = () => {
      //Load everything from the icons folder
      const modules = import.meta.glob("/src/assets/**", {
        as: "raw",
      });
      //Map all the keys in the object where key is icon name
      const icons = mapKeys(modules, getModuleName);
      setIcons(icons);
    };

    loadIcons();
  }, []);

  useEffect(() => {
    const setIcon = async () => {
      if (icons && name) {
        if (typeof icons[name] === "undefined") {
          throw new Error(`Icon "${name}" does not exist.`);
        }
        const svg = await icons[name]();

        if (container.current) {
          // Replace every fill attribute that doesn't have 'none' and set width and height using size prop
          const modifiedSVG = svg
            .replace(/width="[^"]*"/, `width="${size}"`)
            .replace(/height="[^"]*"/, `height="${size}"`);

          container.current.innerHTML = modifiedSVG;
        }
      }
    };

    setIcon();
  }, [icons, name, color]);

  return (
    <div
      id={id}
      style={{ width: size, height: size }}
      ref={container}
      className={className}
    ></div>
  );
};

export default Icon;
