# mms-unix (mUnix / m-unix)

English | [简体中文](README.md)

`mms-unix` is a **uni-app-x** mobile project (UTS/uvue). It includes basic user flows such as login, registration, password reset, and a member center, plus shared request/auth/storage utilities.

---

## Quick Start

### Prerequisites (recommended)

- An IDE/toolchain that supports uni-app-x (e.g. HBuilderX)
- A running backend API endpoint (configured via `baseUrl`)

### Configure API base URL

Update `baseUrl` in `common/config.uts` to point to your dev/test/prod backend environment.

---

## Features

- **Login**: SMS code login and username/password login
- **Register**: phone + code + username + password
- **Forgot password**: reset by SMS code
- **Member center**: avatar/profile + entries (favorites, orders, coupons, etc.)
- **HTTP wrapper**: `common/utils/request.uts` wraps `uni.request`, supports token and redirects on 401
- **Storage**: `common/utils/storage.uts` for token & user info
- **Auth guard**: `common/utils/auth.uts` for login-required pages and return redirects

---

## Project Structure (high-level)

```text
m-unix/
├── common/
│   ├── config.uts
│   ├── api/
│   └── utils/
├── pages/
├── static/
└── uni_modules/
```
