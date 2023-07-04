import * as Icons from "@lib/icons.js"

const mapping = {
    "forest": Icons.ForestIcon,
    "leaf": Icons.LeafIcon,
    "bamboo": Icons.BambooIcon,
    "chemical": Icons.ChemicalIcon,
    "nuclear": Icons.NuclearIcon,
    "trash": Icons.TrashIcon,
    "eolic": Icons.EolicIcon

}


function mapIcon(iconName, size, color) {

    var icon = mapping[iconName];
    return icon(size,color)
}

export { mapIcon }