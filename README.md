# 🧾 Multi-Step Form with Validation – Next.js App Router

A modern, responsive multi-step form built using the latest Next.js App Router. It features real-time validation with Zod, smooth navigation between steps, and a summary screen before submission. This project focuses on clean code architecture, user experience, and accessibility.

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React Hook Form** – Form state management
- **Zod** – Schema-based validation
- **TailwindCSS** – Utility-first styling
- **React (useState/useReducer)** – Local state handling

> **Bonus Features:**
>
> - Mobile responsive UI
> - Dark mode support using TailwindCSS

---

## 🧩 Form Steps

### ✅ Step 1: Personal Information

- Full Name (required)
- Email (required, must be valid)
- Phone Number (required, min 10 digits)

### 🏠 Step 2: Address Details

- Street Address (required)
- City (required)
- Zip Code (required, numbers only, min 5 digits)

### 🔐 Step 3: Account Setup

- Username (required, min 4 characters)
- Password (required, min 6 characters)
- Confirm Password (must match password)

---

## 🧠 Features Implemented

- ✔ Zod validation for each step
- ✔ Real-time error messages below each field
- ✔ Smooth navigation using "Next" and "Previous"
- ✔ Final review screen before submission
- ✔ All data stored in local state
- ✔ Form submission logs data to console

---

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/itsdevelopershakil/multi-step-form-with-validation.git
cd multi-step-form-nextjs

# Install dependencies
npm install

# Run the development server
npm run dev
```
