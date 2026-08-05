# Product Requirements Document (PRD)
# DietMate – Personal Healthy Diet Companion

Version : 1.0
Status : Draft
Category : Web Design Competition (TECHSOFT 2026)

---

# 1. Product Overview

## Product Name

DietMate

## Tagline

**Your Personal Healthy Diet Companion**

## Product Description

DietMate adalah platform berbasis web yang dirancang untuk membantu masyarakat memulai dan menjalani pola hidup sehat melalui proses assessment, perencanaan diet personal, pelacakan progres, serta edukasi mengenai nutrisi.

Berbeda dengan website diet pada umumnya yang hanya menyediakan artikel atau kalkulator BMI, DietMate menghadirkan pengalaman yang lebih personal melalui konsep **Health Journey**, sehingga pengguna merasa didampingi selama proses mencapai target kesehatannya.

---

# 2. Background

Banyak masyarakat ingin memulai hidup sehat, namun mengalami beberapa kendala seperti:

- Tidak mengetahui kondisi tubuhnya sendiri.
- Tidak tahu kebutuhan kalori harian.
- Bingung menentukan jenis diet.
- Sulit menjaga konsistensi.
- Tidak memiliki media sederhana untuk memantau perkembangan.

DietMate hadir sebagai solusi sederhana yang membantu pengguna memahami kondisi tubuh dan membangun kebiasaan hidup sehat secara bertahap.

---

# 3. Goals

Tujuan utama DietMate adalah:

- Membantu pengguna memahami kondisi kesehatan dasar.
- Memberikan pengalaman diet yang personal.
- Membantu pengguna memonitor progres diet.
- Meningkatkan kesadaran masyarakat terhadap gaya hidup sehat.
- Menyediakan edukasi nutrisi yang mudah dipahami.

---

# 4. Target Users

### Primary Users

- Mahasiswa
- Pelajar
- Pekerja

### Secondary Users

- Masyarakat umum
- Pemula yang ingin menjalani diet sehat

---

# 5. Value Proposition

DietMate bukan hanya memberikan informasi mengenai diet, tetapi menjadi pendamping digital yang membantu pengguna menjalani perjalanan hidup sehat melalui pengalaman yang sederhana, personal, dan mudah dipahami.

---

# 6. Product Scope

Website terdiri dari dua pengalaman utama.

## A. Public Experience

Halaman yang dapat diakses sebelum assessment.

## B. Personal Journey

Halaman personal yang muncul setelah assessment selesai.

---

# 7. User Flow

```text
Landing Page
        │
        ▼
Start Assessment
        │
        ▼
Assessment Wizard
        │
        ▼
Health Calculation
(BMI, BMR, Daily Calories)
        │
        ▼
Save to Local Storage
        │
        ▼
Health Journey
        │
 ┌──────┼──────────┬───────────┬────────────┐
 ▼      ▼          ▼           ▼
Dashboard Meal Plan Progress Education Recipes
```

---

# 8. Navigation Structure

## Before Assessment

Navbar

- Home
- Features
- About
- FAQ
- Start Assessment

---

## After Assessment

Navbar

- Dashboard
- Meal Plan
- Progress
- Recipes
- Education

Right Menu

- User Name
- Reset Journey

---

# 9. Pages

---

## 9.1 Landing Page

### Purpose

Memperkenalkan DietMate kepada pengguna baru.

### Components

Hero Section

Features

How It Works

Benefits

Testimonials

FAQ Preview

Call To Action

Footer

---

## 9.2 Assessment

### Purpose

Mengumpulkan data dasar pengguna.

### Assessment Steps

Step 1

Personal Information

- Name
- Age
- Gender

Step 2

Body Information

- Height
- Weight

Step 3

Lifestyle

- Activity Level
- Exercise Frequency

Step 4

Goal

- Lose Weight
- Gain Weight
- Maintain Weight

Step 5

Health Analysis

Loading Animation

Redirect to Journey

---

## 9.3 Dashboard

### Purpose

Menjadi pusat informasi pengguna.

### Components

Greeting Card

Health Summary

Today's Progress

Weekly Progress

Quick Actions

Meal Preview

---

## 9.4 Meal Plan

### Purpose

Memberikan rekomendasi menu harian.

### Components

Breakfast

Lunch

Dinner

Snack

Daily Calories

Nutrition Summary

---

## 9.5 Progress

### Purpose

Menampilkan perkembangan pengguna.

### Components

Current Weight

Target Weight

Progress Bar

Weekly Chart

Achievements

---

## 9.6 Recipes

### Purpose

Memberikan inspirasi menu sehat.

### Components

Recipe Cards

Categories

Calories

Protein

Carbohydrates

Fat

Recipe Detail

---

## 9.7 Education

### Purpose

Memberikan edukasi mengenai nutrisi.

### Contents

Healthy Tips

Nutrition Basics

Healthy Lifestyle

Myth vs Fact

---

## 9.8 FAQ

### Purpose

Menjawab pertanyaan umum pengguna.

---

## 9.9 About

### Purpose

Menjelaskan mengenai DietMate.

Contents

Mission

Vision

Why DietMate

Our Approach

---

# 10. Features

## Feature 1

### Health Assessment

User mengisi data kesehatan dasar.

Output:

- BMI
- BMR
- Daily Calories

---

## Feature 2

### Personalized Dashboard

Dashboard menampilkan informasi personal pengguna.

---

## Feature 3

### Meal Recommendation

Website menampilkan contoh meal plan berdasarkan tujuan pengguna.

---

## Feature 4

### Progress Tracker

User dapat memperbarui berat badan dan melihat perkembangan.

---

## Feature 5

### Healthy Recipes

Kumpulan resep sehat.

---

## Feature 6

### Education Center

Artikel edukasi mengenai pola hidup sehat.

---

## Feature 7

### Reset Journey

Menghapus seluruh data pengguna.

Menghapus:

- Local Storage
- Progress
- Assessment

Redirect kembali ke Landing Page.

---

# 11. Local Storage

Website tidak menggunakan backend.

Semua data disimpan menggunakan Local Storage.

Data yang disimpan:

- Name
- Age
- Gender
- Height
- Weight
- BMI
- BMR
- Daily Calories
- Goal
- Activity Level
- Progress
- Assessment Status

---

# 12. UX Flow

## First Visit

Landing Page

↓

Start Assessment

↓

Assessment

↓

Journey

---

## Returning User

Website membaca Local Storage.

Jika assessment telah selesai.

↓

Langsung menuju

Journey Dashboard.

Jika belum.

↓

Landing Page.

---

# 13. Functional Requirements

### Landing

- CTA menuju Assessment.
- Responsive.
- Smooth scrolling.

---

### Assessment

- Multi-step form.
- Form validation.
- Progress indicator.
- Menyimpan data ke Local Storage.

---

### Dashboard

- Menampilkan data personal.
- Menampilkan ringkasan kesehatan.
- Menampilkan progress harian.

---

### Meal Plan

- Menampilkan meal plan.
- Menampilkan total kalori.

---

### Progress

- Menampilkan grafik.
- Menampilkan target pengguna.
- Update progress.

---

### Recipes

- Menampilkan daftar resep.
- Filter berdasarkan kategori.

---

### Education

- Menampilkan artikel.
- Detail artikel.

---

# 14. Non Functional Requirements

Website harus:

- Responsive
- Fast Loading
- Mobile Friendly
- Accessible
- Easy Navigation
- Modern UI
- Clean Layout

---

# 15. Technology Stack

Frontend

- HTML5
- Bootstrap 5
- CSS3
- Vanilla JavaScript

Libraries

- Bootstrap Icons
- Chart.js
- AOS

Storage

- Local Storage

Deployment

- GitHub Pages / Vercel

---

# 16. Design Principles

Design Style

- Modern
- Minimalist
- Organic
- Fresh
- Premium

UI Principles

- Rounded Components
- Large White Space
- Soft Shadow
- Organic Shapes
- Clean Typography

---

# 17. Success Metrics

DietMate dianggap berhasil apabila:

- Pengguna dapat menyelesaikan assessment dengan mudah.
- Dashboard menampilkan informasi personal secara jelas.
- Navigasi mudah dipahami.
- Website responsif di desktop maupun mobile.
- Seluruh fitur utama berjalan tanpa error.
- Pengalaman pengguna terasa seperti menggunakan aplikasi kesehatan modern.

---

# 18. Future Enhancements (Outside Competition Scope)

Fitur berikut **tidak akan diimplementasikan pada versi lomba**, namun dapat menjadi pengembangan lanjutan:

- Login & Authentication
- Cloud Database
- Sinkronisasi Multi Device
- Reminder Notification
- Barcode Food Scanner
- Integrasi Wearable Devices
- Konsultasi dengan Ahli Gizi
- AI Meal Recommendation
- AI Nutrition Assistant

---

# 19. MVP Scope

Fitur yang wajib tersedia pada versi kompetisi:

- Landing Page
- Assessment Wizard
- Dashboard
- Meal Plan
- Progress Tracker
- Recipes
- Education
- FAQ
- About
- Local Storage
- Reset Journey
- Responsive Design
- Smooth Animation

---

# 20. Closing

DietMate dirancang sebagai platform pendamping gaya hidup sehat yang mengedepankan pengalaman pengguna melalui konsep **Health Journey**. Dengan memanfaatkan HTML, Bootstrap, Vanilla JavaScript, dan Local Storage, DietMate mampu memberikan pengalaman personal tanpa memerlukan backend, sehingga implementasinya tetap realistis untuk tim kompetisi sekaligus menghadirkan UI/UX modern yang selaras dengan tema **Humanity OS** pada TECHSOFT 2026.