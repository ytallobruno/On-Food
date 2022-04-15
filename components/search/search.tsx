import { Menu } from "@headlessui/react";
import { ItemLink } from "./item-link";
import Styles from "./search.module.css";
import { IconFilter } from "@/icons";

export function Search() {
  return (
    <Menu as="div" className={Styles.search}>
      <Menu.Button>
        Selecione uma cidade para iniciar
        <span>
          <IconFilter />
        </span>
      </Menu.Button>
      <Menu.Items className={Styles.options}>
        <div>
          <Menu.Item>
            <ItemLink href="/discover/sao-paulo-sp">São Paulo, SP</ItemLink>
          </Menu.Item>
          <Menu.Item>
            <ItemLink href="/discover/florianopolis-sc">
              Florianópolis, SC
            </ItemLink>
          </Menu.Item>
          <Menu.Item>
            <ItemLink href="/discover/porto-alegre-rs">
              Porto Alegre, RS
            </ItemLink>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}