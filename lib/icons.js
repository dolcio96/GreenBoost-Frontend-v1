import { Icon } from '@iconify/react';


const EolicIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"mdi:wind-energy-outline"} />
    );
}

const TrashIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"maki:waste-basket"} />
    );
}

const BambooIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"game-icons:bamboo"} />
    );
}
const NuclearIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"icon-park-outline:nuclear-plant"} />
    );
}
const ForestIcon = (size, color) => {
    return (
        
        <Icon fontSize={size} color={color} icon={"material-symbols:forest-outline-rounded"} />
    );
}
const LeafIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"arcticons:forest"} />
    );
}
const ChemicalIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"game-icons:chemical-drop"} />
    );
}

const GenericIcon = (size, color) => {
    return (
        <Icon fontSize={size} color={color} icon={"arcticons:forest"} />
    );
}



export { EolicIcon, TrashIcon, BambooIcon, NuclearIcon, ForestIcon, LeafIcon, ChemicalIcon, GenericIcon }
