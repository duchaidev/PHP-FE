# Sử dụng image gốc có Node.js để build ứng dụng React
FROM node:14 AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép tất cả các tệp và thư mục còn lại vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN npm run build

# Sử dụng image Nginx để chạy ứng dụng đã build
FROM nginx:1.23.3

# Sao chép các tệp đã build từ bước trước vào thư mục nginx
COPY --from=build /app/build /usr/share/nginx/html

# Sao chép tệp cấu hình Nginx tùy chỉnh của bạn
COPY default.conf /etc/nginx/conf.d/default.conf


ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Chạy Nginx
EXPOSE 80