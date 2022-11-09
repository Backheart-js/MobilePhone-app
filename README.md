# Thegioitangdong Project
### Một vài thư viện sử dụng trong dự án
1. Customize cra
    **Thư viện giúp ghi đè cấu hình của Webpack**
    * Cài đặt: 
        `
            yarn add customize-cra react-app-rewired --dev
        `
    * Link hướng dẫn: https://github.com/arackaf/customize-cra
2. Babel Rc
    **Giúp cú pháp import vào trông ngắn gọn và dễ làm hơn**
    * Cài đặt:
        `
            npm install --save-dev babel-plugin-module-resolver
        `
        or
        `
            yarn add --dev babel-plugin-module-resolver
        `
    * Link video hướng dẫn: https://www.youtube.com/watch?v=wwGkGi1WFgg&t=972s
3. Flowbite
    **Thư viện có sẵn từ Tailwind Css**
    * Cài đặt:
        `
            npm i flowbite flowbite-react
        `
    * Trang chủ: https://flowbite.com

### Note:
1. Khi muốn dùng file ảnh trong dự án, ta dùng 1 file index để export file ảnh ra rồi đứng từ file khác import vào:
    ```javascript
        const icons = {
            phone: require('~/assets/Icons/icon-mobilephone.png'),
            laptop: require('~/assets/Icons/icon-laptop.png'),
            tablet: require('~/assets/Icons/icon-tablet.png'),
            phu_kien: require('~/assets/Icons/icon-phu-kien.png'),
            pc: require('~/assets/Icons/icon-pc.png'),
            smart_watch: require('~/assets/Icons/icon-smartwatch.png'),
            dong_ho: require('~/assets/Icons/icon-watch.png'),

        }

        export default icons;
    ```

2. Trong reducer của Redux-toolkit, khi ra mutation trực tiếp vào state thì không cần return, còn nếu đặt ra 1 biến mới thì có return