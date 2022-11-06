const { tgtdCategory } = require("~/utils/tgtdAPI");

const productProperties = {
    [tgtdCategory.dtdd]: {
        screen: "Màn hình",
        operator_system: "Hệ điều hành",
        camera_front: "Camera trước",
        camera_back: "Camera sau",
        core: "Chip",
        ram: "Ram",
        rom: "Dung lượng lưu trữ",
        battery: "Pin"
    },
    [tgtdCategory.laptop]: {
        cpu: "CPU",
        ram: "Ram",
        drive: "Ổ cứng",
        screen: "Màn hình",
        graphic_card: "Card đồ họa",
        port: "Cổng kết nối",
        operator_system: "Hệ điều hành",
        size: "Kích thước"
    },
    [tgtdCategory.tablet]: {
        screen: "Màn hình",
        operator_system: "Hệ điều hành",
        chip: "Chip",
        ram: "Ram",
        rom: "Dung lượng lưu trữ",
        connect: "Kết nối",
        camera_front: "Camera trước",
        camera_back: "Camera sau",
        sim: "Sim",
        battery: "Pin"
    },
    [tgtdCategory.smartwatch]: {
        screen: "Màn hình",
        battery: "Pin",
        operator_system: "Hệ điều hành",
        health_features: "Tính năng cho sức khỏe"
    }
}

export default productProperties;