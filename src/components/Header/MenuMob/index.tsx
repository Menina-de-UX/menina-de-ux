// Components
import MenuLinks from "@/components/common/MenuLinks";
import Title from "@/components/common/Title";

// Styles
import styled from "./index.module.scss";
import styledComp from "../../../styles/common.module.scss";

// Utilities
import { SlMenu, SlClose } from "react-icons/sl";

// Hooks
import { useState } from "react";

// Interfaces

export default function MenuMob() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div
        className={`${styled.divMenuMob} ${
          showMenu ? styled.open : styled.close
        }`}
        onClick={toggleMenu}
      >
        <SlMenu size={24} className={styled.figureMenu} />
        {showMenu && (
          <nav className={styled.content}>
            <div className={styled.divHeader}>
              <Title type="Secondary" style={styledComp["title-xs"]}>
                Menu
              </Title>
              <SlClose size={40} className={styled.figure} />
            </div>
            <MenuLinks type="Secondary" onClickHandler={toggleMenu} />
          </nav>
        )}
      </div>
    </>
  );
}