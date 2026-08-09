'use client';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'bn';

const en = {
  nav: {
    home: 'Home',
    features: 'Features',
    modules: 'Modules',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    startTrial: 'Start Free Trial',
  },
  hero: {
    badge: 'New in Dokani 2.0 — Smarter inventory, faster billing & sharper insights',
    titleA: 'Manage your business',
    titleB: 'smartly with Dokani',
    sub: 'Sales, inventory, accounts and operations — unified in one elegant platform built for ambitious shops, wholesalers and SMEs.',
    cta1: 'Start Free Trial',
    cta2: 'Request a Demo',
    note: '14-day free trial · No credit card · Setup in minutes',
  },
  trusted: {
    label: 'Trusted by 40+ businesses',
  },
  cta: {
    eyebrow: 'Built for your business',
    title: 'Run your shop easily, faster, and without hassle with Dokani.',
    sub: 'Free for 14 days. No credit card. Cancel anytime.',
    primary: 'Start Free Trial',
    secondary: 'Book a Demo',
  },
  footer: {
    desc: 'The complete inventory & business management system for modern shops, wholesalers and SMEs.',
    product: 'Product',
    company: 'Company',
    getStarted: 'Get started',
    rights: 'All rights reserved.',
    tagline: 'A product of',
    bookDemo: 'Book a Demo',
    contactSales: 'Contact Sales',
  },
  features: {
    eyebrow: 'Why Dokani',
    title: 'Everything your shop runs on, in one place',
    sub: 'Stop juggling spreadsheets and disconnected apps. Dokani unifies the tools you actually use every day.',
    items: {
      inventoryT: 'Inventory Tracking',
      inventoryD: 'Real-time stock across unlimited warehouses with batches & barcodes.',
      salesT: 'Sales & Purchase',
      salesD: 'Lightning-fast invoicing, POs and receiving with smart automation.',
      accountsT: 'Accounting Built-In',
      accountsD: 'Ledger, journals, P&L and balance sheet — fully integrated, no exports needed.',
      reportsT: 'Reports & Analytics',
      reportsD: '15+ reports plus a custom builder. Schedule and email anything.',
      teamsT: 'Multi-User & Roles',
      teamsD: 'Granular permissions, branch isolation and complete audit trails.',
      securityT: 'Bank-Grade Security',
      securityD: 'Encrypted backups, SSO and role-based access control by default.',
    },
  },
  benefits: {
    eyebrow: 'Built for Dokandars',
    title: 'The unfair advantage for ambitious shops',
    sub: 'Dokani is opinionated software — it knows how a real shop runs because it was built with hundreds of them.',
    items: {
      setup: 'Setup in under 10 minutes',
      migration: 'Free migration from Excel or other tools',
      cloud: 'Cloud-based — access from anywhere, anytime',
      lang: 'Bangla & English interface',
      print: 'Print-ready invoices & receipts',
      support: '24/7 human support',
    },
  },
  modulesPreview: {
    eyebrow: '20+ Modules',
    title: 'A module for every corner of your business',
    explore: 'Explore all modules',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Loved by people who run real businesses',
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Choose a plan that works for you',
    sub: 'Unlock the full power of Dokani. 14-day free trial on all plans.',
    monthly: 'Bill Monthly',
    yearly: 'Bill Annually',
    save: 'Save 17%',
    perMo: '/mo',
    perYr: '/yr',
    billedYearly: 'billed annually',
    billedMonthly: 'billed monthly',
    choose: 'Start free trial',
    mostPopular: 'Best value',
    planName: 'Dokani Pro',
    planDesc:
      'Everything you need to run your shop — all modules, unlimited products, full support.',
    pageTitle: 'Two plans.',
    pageTitleB: 'Everything included.',
    pageSub:
      'Choose the billing frequency that fits your business. Start with a 14-day free trial.',
    includes: 'Key Features:',
    starterName: 'Starter',
    starterDesc: 'Ideal for growing shops looking to manage operations monthly.',
    starterPrice: '1,000',
    starterChoose: 'Start Free Trial',
    starterBilled: 'billed monthly',
    proName: 'Pro',
    proDesc: 'Best value for ambitious shops looking to grow and save with yearly billing.',
    proPrice: '12,000',
    proChoose: 'Start Free Trial',
    proBilled: 'billed annually',
    feat1: 'Unlimited users',
    feat2: 'Unlimited products',
    feat3: 'All 20+ modules included',
    feat4: 'Multi-branch & warehouse',
    feat5: 'Accounting & 15+ reports',
    feat6: 'Free migration & 24/7 support',
  },
  modulePage: {
    eyebrow: 'Modules',
    titleA: '20+ modules.',
    titleB: 'One platform.',
    sub: 'From the front counter to the chart of accounts — everything is connected, so your data only ever lives in one place.',
  },
  featuresPage: {
    eyebrow: 'Features',
    titleA: 'Built for the way',
    titleB: 'real businesses',
    titleC: 'work',
    sub: 'Every feature in Dokani exists because a shop owner asked for it. Nothing bloated, nothing missing.',
  },
  modules: {
    dashboard: {
      name: 'Dashboard',
      description:
        'A live, at-a-glance view of sales, stock, cash flow and KPIs across every branch.',
      f1: 'Real-time KPIs',
      f2: 'Branch comparison',
      f3: 'Custom widgets',
    },
    sales: {
      name: 'Sales',
      description: 'POS-fast invoicing with discounts, taxes and instant receipt printing.',
      f1: 'Quick invoicing',
      f2: 'Tax & discount engine',
      f3: 'Receipt printing',
    },
    'money-receipt': {
      name: 'Money Receipt',
      description: 'Track every payment received against invoices with automatic reconciliation.',
      f1: 'Multi-currency',
      f2: 'Auto-reconcile',
      f3: 'PDF receipts',
    },
    products: {
      name: 'Products',
      description: 'Unlimited products with variants, barcodes, batches and multi-unit support.',
      f1: 'Variants & batches',
      f2: 'Barcode generator',
      f3: 'Bulk import',
    },
    purchase: {
      name: 'Purchase',
      description: 'Raise POs, receive goods and update stock in one fluid workflow.',
      f1: 'PO automation',
      f2: 'GRN tracking',
      f3: 'Landed cost',
    },
    quotation: {
      name: 'Quotation',
      description: 'Send beautiful quotes that convert into orders in a single click.',
      f1: 'Branded templates',
      f2: 'Convert to invoice',
      f3: 'Approval flow',
    },
    warehouse: {
      name: 'Warehouse',
      description: 'Manage unlimited warehouses with rack, bin and shelf level precision.',
      f1: 'Multi-location',
      f2: 'Bin tracking',
      f3: 'Stock audit',
    },
    transfer: {
      name: 'Transfer',
      description: 'Move stock between warehouses with full chain-of-custody.',
      f1: 'In-transit stock',
      f2: 'Approvals',
      f3: 'Auto adjustments',
    },
    return: {
      name: 'Return',
      description: 'Handle sales & purchase returns with credit notes and stock reversal.',
      f1: 'Sales returns',
      f2: 'Purchase returns',
      f3: 'Credit notes',
    },
    accounts: {
      name: 'Accounts',
      description: 'A full ledger with chart of accounts, journals and trial balance.',
      f1: 'Journals',
      f2: 'Trial balance',
      f3: 'P&L',
    },
    customer: {
      name: 'Customer',
      description: '360° customer profiles with credit limits, statements and loyalty tracking.',
      f1: 'Credit limits',
      f2: 'Statements',
      f3: 'Loyalty',
    },
    cheque: {
      name: 'Cheque Management',
      description: 'Track issued & received cheques through every status with reminders.',
      f1: 'Status pipeline',
      f2: 'Auto reminders',
      f3: 'Bounce tracking',
    },
    loan: {
      name: 'Loan & Investment',
      description: 'Manage business loans, repayments, interest and investor positions.',
      f1: 'EMI schedule',
      f2: 'Interest calc',
      f3: 'Investor cap table',
    },
    supplier: {
      name: 'Supplier',
      description: 'Centralise supplier data, payables and performance scoring.',
      f1: 'Payables aging',
      f2: 'Performance score',
      f3: 'Statements',
    },
    expense: {
      name: 'Expense',
      description: 'Capture every expense by category, project or branch with attachments.',
      f1: 'Categories',
      f2: 'Receipts upload',
      f3: 'Approvals',
    },
    payroll: {
      name: 'Payroll',
      description: 'Run salaries with allowances, deductions, attendance and payslips.',
      f1: 'Payslips',
      f2: 'Tax & deductions',
      f3: 'Attendance link',
    },
    'other-income': {
      name: 'Other Income',
      description: 'Record non-sales income streams cleanly into your books.',
      f1: 'Income categories',
      f2: 'Recurring entries',
      f3: 'Auto-posting',
    },
    reports: {
      name: 'Reports',
      description: '15+ ready-made reports plus a builder for the ones you invent.',
      f1: '15+ reports',
      f2: 'Custom builder',
      f3: 'Schedule & email',
    },
    configuration: {
      name: 'Configuration',
      description: 'Tune Dokani to your business — taxes, units, numbering, branding.',
      f1: 'Tax presets',
      f2: 'Custom numbering',
      f3: 'White-label',
    },
    administration: {
      name: 'Administration',
      description: 'Granular roles, audit trails and SSO for teams that scale.',
      f1: 'Role-based access',
      f2: 'Audit logs',
      f3: 'SSO ready',
    },
  },
  featureSections: {
    dashboardTag: 'Dashboard',
    dashboardTitle: 'One dashboard for the whole business',
    dashboardDesc:
      'See sales, purchases, returns, dues and balances at a glance. Filter by Today, This Month or Lifetime — and switch between every branch from a single dropdown.',
    dashboardB1: 'Sales & Purchase overview',
    dashboardB2: 'Top selling products',
    dashboardB3: 'Top customer & supplier dues',
    dashboardB4: 'Switch any branch instantly',
    posTag: 'POS Sale',
    posTitle: 'POS-fast invoicing at the counter',
    posDesc:
      "Pick a warehouse, search products by name or barcode, apply per-line or whole-cart discounts, accept cash, bKash, card or hand cash — print and you're done.",
    posB1: 'Walk-in or registered customer',
    posB2: 'Per-line & cart discounts',
    posB3: 'Multi payment methods',
    posB4: 'Live stock visibility per item',
    accountsTag: 'Accounts',
    accountsTitle: 'Accounting & balances built-in',
    accountsDesc:
      'Track every account — bank, mobile banking, cash drawer — with live available balances. Customer & supplier counts, plus a 12-month sales vs purchase chart, ship by default.',
    accountsB1: 'Multi-account ledger',
    accountsB2: 'Mobile banking & bank accounts',
    accountsB3: 'Customers & suppliers register',
    accountsB4: '12-month trend analytics',
    securityTag: 'Security',
    securityTitle: 'Secure access on web & mobile',
    securityDesc:
      'Branded sign-in for your team with role-based access, password recovery and dedicated Android & iOS apps so owners can monitor the shop from anywhere.',
    securityB1: 'Role-based access control',
    securityB2: 'Forgot password & support',
    securityB3: 'Android & iOS apps',
    securityB4: 'Encrypted backups',
    inventoryTag: 'Inventory',
    inventoryTitle: 'Real-time inventory tracking',
    inventoryDesc:
      'Track every unit across unlimited warehouses with batches, barcodes, expiry dates and multi-unit conversion. Automatic reorder alerts keep shelves stocked without overordering.',
    inventoryB1: 'Multi-warehouse stock',
    inventoryB2: 'Barcode & batch tracking',
    inventoryB3: 'Reorder thresholds',
    inventoryB4: 'Stock audit & adjustments',
    teamsTag: 'Teams',
    teamsTitle: 'Multi-user & role management',
    teamsDesc:
      'Define exactly who can see and do what. Branch isolation, approval flows and immutable audit trails come standard.',
    teamsB1: 'Granular permissions',
    teamsB2: 'Branch-level isolation',
    teamsB3: 'Approval workflows',
    teamsB4: 'Full audit log',
  },
  about: {
    eyebrow: 'About',
    titleA: 'Software built for',
    titleB: 'dokandars',
    sub: 'Dokani started in a small shop in Dhaka where the owner was drowning in spreadsheets. We built him a better way. Today, thousands of businesses run on the same idea.',
    storyT: 'Our story',
    storyD:
      'From one shop to thousands. We grew by listening to the people who actually use Dokani every day.',
    missionT: 'Our mission',
    missionD:
      'Give every SME the operational power of a Fortune 500 company — without the price tag or the complexity.',
    visionT: 'Our vision',
    visionD:
      'A world where running a shop is as effortless as opening one. Where data, not guesswork, drives every decision.',
    statBusinesses: 'Active businesses',
    statTx: 'Transactions processed',
    statModules: 'Modules',
    statUptime: 'Uptime',
  },
  contact: {
    eyebrow: 'Contact',
    titleA: "Let's",
    titleB: 'talk shop',
    sub: "Whether you want a demo, have a question or need help migrating — we're here. Most replies go out within an hour.",
    email: 'Email',
    phone: 'Phone',
    office: 'Office',
    recommended: 'Recommended',
    bookDemoT: 'Book a live demo',
    bookDemoD:
      "30 minutes with a product specialist. We'll set up a sandbox with your data so you can really feel it.",
    sent: 'Thanks — we got it.',
    sentD:
      'A member of our team will reach out shortly. Meanwhile, feel free to start your free trial.',
    fName: 'Full name',
    wEmail: 'Work email',
    company: 'Company',
    fPhone: 'Phone',
    help: 'How can we help?',
    helpPh: 'Tell us a little about your business…',
    send: 'Send on WhatsApp',
    tryAgain: 'Send again',
  },
} as const;

const bn = {
  nav: {
    home: 'হোম',
    features: 'ফিচার',
    modules: 'মডিউল',
    pricing: 'মূল্য',
    about: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    startTrial: 'ফ্রি ট্রায়াল শুরু করুন',
  },
  hero: {
    badge: 'দোকানি ২.০-এ নতুন — স্মার্ট ইনভেন্টরি, দ্রুত বিলিং ও তীক্ষ্ণ অন্তর্দৃষ্টি',
    titleA: 'আপনার ব্যবসা চালান',
    titleB: 'দোকানি দিয়ে স্মার্টভাবে',
    sub: 'সেলস, ইনভেন্টরি, অ্যাকাউন্টস এবং অপারেশন — দোকান, পাইকারি ও এসএমই-র জন্য একটি সুসংগঠিত প্ল্যাটফর্মে।',
    cta1: 'ফ্রি ট্রায়াল শুরু করুন',
    cta2: 'ডেমো রিকোয়েস্ট করুন',
    note: '১৪ দিনের ফ্রি ট্রায়াল · কোনো কার্ড নয় · কয়েক মিনিটেই সেটআপ',
  },
  trusted: {
    label: '৪০+ ব্যবসার বিশ্বস্ত পছন্দ',
  },
  cta: {
    eyebrow: 'আপনার ব্যবসার জন্য তৈরি',
    title: 'সহজে, দ্রুত আর ঝামেলা ছাড়াই আপনার দোকান পরিচালনা করুন দোকানি দিয়ে।',
    sub: '১৪ দিন ফ্রি। কোনো কার্ড নয়। যেকোনো সময় বাতিল।',
    primary: 'ফ্রি ট্রায়াল শুরু করুন',
    secondary: 'ডেমো বুক করুন',
  },
  footer: {
    desc: 'আধুনিক দোকান, পাইকারি ও এসএমই-র জন্য সম্পূর্ণ ইনভেন্টরি ও বিজনেস ম্যানেজমেন্ট সিস্টেম।',
    product: 'প্রোডাক্ট',
    company: 'কোম্পানি',
    getStarted: 'শুরু করুন',
    rights: 'সর্বস্বত্ব সংরক্ষিত।',
    tagline: 'এর একটি পণ্য।',
    bookDemo: 'ডেমো বুক করুন',
    contactSales: 'সেলসের সাথে কথা বলুন',
  },
  features: {
    eyebrow: 'কেন দোকানি',
    title: 'আপনার দোকানের সবকিছু, এক জায়গায়',
    sub: 'স্প্রেডশিট আর বিচ্ছিন্ন অ্যাপের ঝামেলা শেষ। দোকানি প্রতিদিনের সব টুল একসাথে আনে।',
    items: {
      inventoryT: 'ইনভেন্টরি ট্র্যাকিং',
      inventoryD: 'আনলিমিটেড গুদামে রিয়েল-টাইম স্টক, ব্যাচ ও বারকোডসহ।',
      salesT: 'সেলস ও পারচেজ',
      salesD: 'দ্রুত ইনভয়েসিং, পিও ও রিসিভিং — স্মার্ট অটোমেশনে।',
      accountsT: 'বিল্ট-ইন অ্যাকাউন্টিং',
      accountsD: 'লেজার, জার্নাল, পি অ্যান্ড এল ও ব্যালেন্স শিট — সম্পূর্ণ ইন্টিগ্রেটেড।',
      reportsT: 'রিপোর্ট ও অ্যানালিটিক্স',
      reportsD: '১৫+ রিপোর্ট ও কাস্টম বিল্ডার। শিডিউল ও ইমেইল করুন যেকোনো কিছু।',
      teamsT: 'মাল্টি-ইউজার ও রোল',
      teamsD: 'নির্দিষ্ট অনুমতি, ব্রাঞ্চ আইসোলেশন ও সম্পূর্ণ অডিট ট্রেইল।',
      securityT: 'ব্যাংক-গ্রেড সিকিউরিটি',
      securityD: 'এনক্রিপ্টেড ব্যাকআপ, এসএসও ও রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল।',
    },
  },
  benefits: {
    eyebrow: 'দোকানদারদের জন্য',
    title: 'উচ্চাকাঙ্ক্ষী দোকানের জন্য অসম সুবিধা',
    sub: 'দোকানি একটি ওপিনিয়নেটেড সফটওয়্যার — শত শত দোকানের সাথে তৈরি।',
    items: {
      setup: '১০ মিনিটেরও কমে সেটআপ',
      migration: 'এক্সেল বা অন্য টুল থেকে ফ্রি মাইগ্রেশন',
      cloud: 'ক্লাউড-ভিত্তিক — যেকোনো জায়গা থেকে অ্যাক্সেস',
      lang: 'বাংলা ও ইংরেজি ইন্টারফেস',
      print: 'প্রিন্ট-রেডি ইনভয়েস ও রসিদ',
      support: '২৪/৭ মানব সহায়তা',
    },
  },
  modulesPreview: {
    eyebrow: '২০+ মডিউল',
    title: 'ব্যবসার প্রতিটি কোণের জন্য একটি মডিউল',
    explore: 'সব মডিউল দেখুন',
  },
  testimonials: {
    eyebrow: 'প্রশংসাপত্র',
    title: 'যারা বাস্তবে ব্যবসা চালান, তারাই ভালোবাসেন',
  },
  pricing: {
    eyebrow: 'মূল্য',
    title: 'আপনার জন্য উপযুক্ত প্ল্যানটি বেছে নিন',
    sub: 'দোকানির সম্পূর্ণ কার্যকারিতা আনলক করুন। সকল প্ল্যানে ১৪ দিনের ফ্রি ট্রায়াল।',
    monthly: 'মাসিক বিল',
    yearly: 'বার্ষিক বিল',
    save: '১৭% সাশ্রয়',
    perMo: '/মাস',
    perYr: '/বছর',
    billedYearly: 'বার্ষিক বিলিং',
    billedMonthly: 'মাসিক বিলিং',
    choose: 'ফ্রি ট্রায়াল শুরু করুন',
    mostPopular: 'সেরা মূল্য',
    planName: 'দোকানি প্রো',
    planDesc: 'আপনার দোকান চালানোর জন্য সবকিছু — সব মডিউল, আনলিমিটেড প্রোডাক্ট, পূর্ণ সাপোর্ট।',
    pageTitle: 'দুটি প্ল্যান।',
    pageTitleB: 'সবকিছু অন্তর্ভুক্ত।',
    pageSub:
      'আপনার ব্যবসার জন্য উপযুক্ত বিলিং ফ্রিকোয়েন্সি বেছে নিন। ১৪ দিনের ফ্রি ট্রায়াল দিয়ে শুরু করুন।',
    includes: 'প্রধান ফিচারসমূহ:',
    starterName: 'স্টার্টার',
    starterDesc: 'মাসিক ভিত্তিতে দোকান পরিচালনা করার জন্য আদর্শ।',
    starterPrice: '১,০০০',
    starterChoose: 'ফ্রি ট্রায়াল শুরু করুন',
    starterBilled: 'মাসিক বিলিং',
    proName: 'প্রো',
    proDesc: 'বার্ষিক বিলিংয়ে সাশ্রয় করতে এবং ব্যবসা বাড়াতে চান এমন দোকানের জন্য সেরা।',
    proPrice: '১২,০০০',
    proChoose: 'ফ্রি ট্রায়াল শুরু করুন',
    proBilled: 'বার্ষিক বিলিং',
    feat1: 'আনলিমিটেড ইউজার',
    feat2: 'আনলিমিটেড প্রোডাক্ট',
    feat3: 'সব ২০+ মডিউল অন্তর্ভুক্ত',
    feat4: 'মাল্টি-ব্রাঞ্চ ও গুদাম',
    feat5: 'অ্যাকাউন্টিং ও ১৫+ রিপোর্ট',
    feat6: 'ফ্রি মাইগ্রেশন ও ২৪/৭ সাপোর্ট',
  },
  modulePage: {
    eyebrow: 'মডিউল',
    titleA: '২০+ মডিউল।',
    titleB: 'একটিই প্ল্যাটফর্ম।',
    sub: 'ফ্রন্ট কাউন্টার থেকে চার্ট অফ অ্যাকাউন্টস — সব কিছু সংযুক্ত, যাতে আপনার ডেটা শুধুমাত্র এক জায়গাতেই থাকে।',
  },
  featuresPage: {
    eyebrow: 'ফিচার',
    titleA: 'যেভাবে',
    titleB: 'বাস্তব ব্যবসা',
    titleC: 'চলে — সেভাবে তৈরি',
    sub: 'দোকানির প্রতিটি ফিচার তৈরি হয়েছে কোনো একজন দোকানদারের অনুরোধে। অপ্রয়োজনীয় কিছু নেই, কিছু বাদও পড়েনি।',
  },
  modules: {
    dashboard: {
      name: 'ড্যাশবোর্ড',
      description: 'প্রতিটি ব্রাঞ্চে সেলস, স্টক, ক্যাশ ফ্লো ও কেপিআই-এর লাইভ এক-ঝলক দৃশ্য।',
      f1: 'রিয়েল-টাইম কেপিআই',
      f2: 'ব্রাঞ্চ তুলনা',
      f3: 'কাস্টম উইজেট',
    },
    sales: {
      name: 'সেলস',
      description: 'ডিসকাউন্ট, ট্যাক্স ও তাৎক্ষণিক রিসিট প্রিন্টিংসহ পিওএস-গতির ইনভয়েসিং।',
      f1: 'দ্রুত ইনভয়েসিং',
      f2: 'ট্যাক্স ও ডিসকাউন্ট ইঞ্জিন',
      f3: 'রিসিট প্রিন্টিং',
    },
    'money-receipt': {
      name: 'মানি রিসিট',
      description:
        'ইনভয়েসের বিপরীতে প্রাপ্ত প্রতিটি পেমেন্ট স্বয়ংক্রিয় রিকনসিলিয়েশনসহ ট্র্যাক করুন।',
      f1: 'মাল্টি-কারেন্সি',
      f2: 'অটো-রিকনসাইল',
      f3: 'পিডিএফ রিসিট',
    },
    products: {
      name: 'প্রোডাক্ট',
      description: 'ভ্যারিয়েন্ট, বারকোড, ব্যাচ ও মাল্টি-ইউনিট সাপোর্টসহ আনলিমিটেড প্রোডাক্ট।',
      f1: 'ভ্যারিয়েন্ট ও ব্যাচ',
      f2: 'বারকোড জেনারেটর',
      f3: 'বাল্ক ইম্পোর্ট',
    },
    purchase: {
      name: 'পারচেজ',
      description: 'একটি স্বচ্ছন্দ ওয়ার্কফ্লোতে পিও তৈরি, পণ্য গ্রহণ ও স্টক আপডেট।',
      f1: 'পিও অটোমেশন',
      f2: 'জিআরএন ট্র্যাকিং',
      f3: 'ল্যান্ডেড কস্ট',
    },
    quotation: {
      name: 'কোটেশন',
      description: 'এক ক্লিকে অর্ডারে রূপান্তরযোগ্য সুন্দর কোটেশন পাঠান।',
      f1: 'ব্র্যান্ডেড টেমপ্লেট',
      f2: 'ইনভয়েসে রূপান্তর',
      f3: 'অনুমোদন প্রক্রিয়া',
    },
    warehouse: {
      name: 'ওয়্যারহাউস',
      description: 'র‍্যাক, বিন ও শেলফ লেভেল নির্ভুলতায় আনলিমিটেড গুদাম পরিচালনা।',
      f1: 'মাল্টি-লোকেশন',
      f2: 'বিন ট্র্যাকিং',
      f3: 'স্টক অডিট',
    },
    transfer: {
      name: 'ট্রান্সফার',
      description: 'সম্পূর্ণ চেইন-অফ-কাস্টডিসহ গুদামের মধ্যে স্টক স্থানান্তর।',
      f1: 'ইন-ট্রানজিট স্টক',
      f2: 'অনুমোদন',
      f3: 'অটো অ্যাডজাস্টমেন্ট',
    },
    return: {
      name: 'রিটার্ন',
      description: 'ক্রেডিট নোট ও স্টক রিভার্সালসহ সেলস ও পারচেজ রিটার্ন পরিচালনা।',
      f1: 'সেলস রিটার্ন',
      f2: 'পারচেজ রিটার্ন',
      f3: 'ক্রেডিট নোট',
    },
    accounts: {
      name: 'অ্যাকাউন্টস',
      description: 'চার্ট অফ অ্যাকাউন্টস, জার্নাল ও ট্রায়াল ব্যালেন্সসহ পূর্ণ লেজার।',
      f1: 'জার্নাল',
      f2: 'ট্রায়াল ব্যালেন্স',
      f3: 'পি অ্যান্ড এল',
    },
    customer: {
      name: 'কাস্টমার',
      description: 'ক্রেডিট লিমিট, স্টেটমেন্ট ও লয়্যালটি ট্র্যাকিংসহ ৩৬০° কাস্টমার প্রোফাইল।',
      f1: 'ক্রেডিট লিমিট',
      f2: 'স্টেটমেন্ট',
      f3: 'লয়্যালটি',
    },
    cheque: {
      name: 'চেক ম্যানেজমেন্ট',
      description: 'ইস্যুকৃত ও প্রাপ্ত চেক প্রতিটি স্ট্যাটাস ধরে রিমাইন্ডারসহ ট্র্যাক করুন।',
      f1: 'স্ট্যাটাস পাইপলাইন',
      f2: 'অটো রিমাইন্ডার',
      f3: 'বাউন্স ট্র্যাকিং',
    },
    loan: {
      name: 'লোন ও ইনভেস্টমেন্ট',
      description: 'ব্যবসায়িক লোন, কিস্তি, সুদ ও বিনিয়োগকারীর অবস্থান পরিচালনা।',
      f1: 'ইএমআই সিডিউল',
      f2: 'সুদ গণনা',
      f3: 'ইনভেস্টর ক্যাপ টেবিল',
    },
    supplier: {
      name: 'সাপ্লায়ার',
      description: 'সাপ্লায়ার ডেটা, পেয়েবল ও পারফরম্যান্স স্কোরিং কেন্দ্রীভূত করুন।',
      f1: 'পেয়েবল এজিং',
      f2: 'পারফরম্যান্স স্কোর',
      f3: 'স্টেটমেন্ট',
    },
    expense: {
      name: 'এক্সপেন্স',
      description:
        'ক্যাটাগরি, প্রজেক্ট বা ব্রাঞ্চ অনুযায়ী প্রতিটি খরচ অ্যাটাচমেন্টসহ রেকর্ড করুন।',
      f1: 'ক্যাটাগরি',
      f2: 'রিসিট আপলোড',
      f3: 'অনুমোদন',
    },
    payroll: {
      name: 'পেরোল',
      description: 'ভাতা, কর্তন, উপস্থিতি ও পে-স্লিপসহ স্যালারি প্রক্রিয়া করুন।',
      f1: 'পে-স্লিপ',
      f2: 'ট্যাক্স ও কর্তন',
      f3: 'অ্যাটেনডেন্স লিংক',
    },
    'other-income': {
      name: 'অন্যান্য আয়',
      description: 'নন-সেলস আয়ের ধারা পরিষ্কারভাবে আপনার বইয়ে রেকর্ড করুন।',
      f1: 'আয়ের ক্যাটাগরি',
      f2: 'রিকারিং এন্ট্রি',
      f3: 'অটো-পোস্টিং',
    },
    reports: {
      name: 'রিপোর্ট',
      description: '১৫+ রেডিমেড রিপোর্টের পাশাপাশি আপনার নিজের তৈরি রিপোর্টের জন্য বিল্ডার।',
      f1: '১৫+ রিপোর্ট',
      f2: 'কাস্টম বিল্ডার',
      f3: 'শিডিউল ও ইমেইল',
    },
    configuration: {
      name: 'কনফিগারেশন',
      description: 'ট্যাক্স, ইউনিট, নাম্বারিং, ব্র্যান্ডিং — দোকানিকে আপনার ব্যবসার মতো করে সাজান।',
      f1: 'ট্যাক্স প্রিসেট',
      f2: 'কাস্টম নাম্বারিং',
      f3: 'হোয়াইট-লেবেল',
    },
    administration: {
      name: 'অ্যাডমিনিস্ট্রেশন',
      description: 'স্কেল করা টিমের জন্য নির্দিষ্ট রোল, অডিট ট্রেইল ও এসএসও।',
      f1: 'রোল-ভিত্তিক অ্যাক্সেস',
      f2: 'অডিট লগ',
      f3: 'এসএসও রেডি',
    },
  },
  featureSections: {
    dashboardTag: 'ড্যাশবোর্ড',
    dashboardTitle: 'পুরো ব্যবসার জন্য একটি ড্যাশবোর্ড',
    dashboardDesc:
      'এক নজরে সেলস, পারচেজ, রিটার্ন, বকেয়া ও ব্যালেন্স দেখুন। আজ, এই মাস বা সারাজীবন দিয়ে ফিল্টার করুন — এবং একটি ড্রপডাউন থেকে যেকোনো ব্রাঞ্চে সুইচ করুন।',
    dashboardB1: 'সেলস ও পারচেজ ওভারভিউ',
    dashboardB2: 'শীর্ষ বিক্রিত পণ্য',
    dashboardB3: 'শীর্ষ কাস্টমার ও সাপ্লায়ার বকেয়া',
    dashboardB4: 'যেকোনো ব্রাঞ্চে তাৎক্ষণিক সুইচ',
    posTag: 'পিওএস সেল',
    posTitle: 'কাউন্টারে পিওএস-গতির ইনভয়েসিং',
    posDesc:
      'একটি গুদাম বেছে নিন, নাম বা বারকোড দিয়ে পণ্য খুঁজুন, প্রতি লাইনে বা পুরো কার্টে ডিসকাউন্ট দিন, ক্যাশ, বিকাশ, কার্ড গ্রহণ করুন — প্রিন্ট করুন, হয়ে গেল।',
    posB1: 'ওয়াক-ইন বা রেজিস্টার্ড কাস্টমার',
    posB2: 'প্রতি লাইন ও কার্ট ডিসকাউন্ট',
    posB3: 'একাধিক পেমেন্ট পদ্ধতি',
    posB4: 'প্রতি আইটেমের লাইভ স্টক',
    accountsTag: 'অ্যাকাউন্টস',
    accountsTitle: 'বিল্ট-ইন অ্যাকাউন্টিং ও ব্যালেন্স',
    accountsDesc:
      'প্রতিটি অ্যাকাউন্ট — ব্যাংক, মোবাইল ব্যাংকিং, ক্যাশ ড্রয়ার — লাইভ অ্যাভেইলেবল ব্যালেন্সসহ ট্র্যাক করুন। কাস্টমার ও সাপ্লায়ার সংখ্যা এবং ১২-মাসের সেলস বনাম পারচেজ চার্ট ডিফল্টভাবে।',
    accountsB1: 'মাল্টি-অ্যাকাউন্ট লেজার',
    accountsB2: 'মোবাইল ব্যাংকিং ও ব্যাংক অ্যাকাউন্ট',
    accountsB3: 'কাস্টমার ও সাপ্লায়ার রেজিস্টার',
    accountsB4: '১২-মাসের ট্রেন্ড অ্যানালিটিক্স',
    securityTag: 'সিকিউরিটি',
    securityTitle: 'ওয়েব ও মোবাইলে নিরাপদ অ্যাক্সেস',
    securityDesc:
      'আপনার টিমের জন্য ব্র্যান্ডেড সাইন-ইন, রোল-ভিত্তিক অ্যাক্সেস, পাসওয়ার্ড রিকভারি ও ডেডিকেটেড অ্যান্ড্রয়েড ও আইওএস অ্যাপ।',
    securityB1: 'রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল',
    securityB2: 'পাসওয়ার্ড ভুলে যাওয়া ও সাপোর্ট',
    securityB3: 'অ্যান্ড্রয়েড ও আইওএস অ্যাপ',
    securityB4: 'এনক্রিপ্টেড ব্যাকআপ',
    inventoryTag: 'ইনভেন্টরি',
    inventoryTitle: 'রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং',
    inventoryDesc:
      'ব্যাচ, বারকোড, এক্সপায়ারি ও মাল্টি-ইউনিট কনভার্শনসহ আনলিমিটেড গুদামে প্রতিটি ইউনিট ট্র্যাক করুন। স্বয়ংক্রিয় রিঅর্ডার অ্যালার্ট শেলফ ভরে রাখে।',
    inventoryB1: 'মাল্টি-ওয়্যারহাউস স্টক',
    inventoryB2: 'বারকোড ও ব্যাচ ট্র্যাকিং',
    inventoryB3: 'রিঅর্ডার থ্রেশহোল্ড',
    inventoryB4: 'স্টক অডিট ও অ্যাডজাস্টমেন্ট',
    teamsTag: 'টিম',
    teamsTitle: 'মাল্টি-ইউজার ও রোল ম্যানেজমেন্ট',
    teamsDesc:
      'কে কী দেখতে ও করতে পারবে তা নির্ধারণ করুন। ব্রাঞ্চ আইসোলেশন, অনুমোদন প্রবাহ ও অপরিবর্তনীয় অডিট ট্রেইল ডিফল্ট।',
    teamsB1: 'নির্দিষ্ট অনুমতি',
    teamsB2: 'ব্রাঞ্চ-লেভেল আইসোলেশন',
    teamsB3: 'অনুমোদন ওয়ার্কফ্লো',
    teamsB4: 'সম্পূর্ণ অডিট লগ',
  },
  about: {
    eyebrow: 'আমাদের সম্পর্কে',
    titleA: 'তৈরি করা হয়েছে',
    titleB: 'দোকানদারদের জন্য',
    sub: 'দোকানি শুরু হয়েছিল ঢাকার একটি ছোট দোকানে যেখানে মালিক স্প্রেডশিটে ডুবে ছিলেন। আমরা তাকে একটি ভালো উপায় তৈরি করে দিয়েছি। আজ হাজার হাজার ব্যবসা একই আইডিয়ায় চলছে।',
    storyT: 'আমাদের গল্প',
    storyD:
      'একটি দোকান থেকে হাজারে। আমরা শুনেই বড় হয়েছি — যারা প্রতিদিন দোকানি ব্যবহার করেন তাদের কাছ থেকে।',
    missionT: 'আমাদের মিশন',
    missionD: 'প্রতিটি এসএমইকে ফরচুন ৫০০ কোম্পানির অপারেশনাল শক্তি দিন — দাম বা জটিলতা ছাড়াই।',
    visionT: 'আমাদের ভিশন',
    visionD:
      'এমন একটি বিশ্ব যেখানে দোকান চালানো খোলার মতোই সহজ। যেখানে সিদ্ধান্ত নেয় ডেটা, অনুমান নয়।',
    statBusinesses: 'সক্রিয় ব্যবসা',
    statTx: 'প্রক্রিয়াকৃত লেনদেন',
    statModules: 'মডিউল',
    statUptime: 'আপটাইম',
  },
  contact: {
    eyebrow: 'যোগাযোগ',
    titleA: 'আসুন',
    titleB: 'কথা বলি',
    sub: 'ডেমো, প্রশ্ন বা মাইগ্রেশন সাহায্য — আমরা আছি। বেশিরভাগ উত্তর এক ঘণ্টার মধ্যেই।',
    email: 'ইমেইল',
    phone: 'ফোন',
    office: 'অফিস',
    recommended: 'প্রস্তাবিত',
    bookDemoT: 'লাইভ ডেমো বুক করুন',
    bookDemoD:
      'একজন প্রোডাক্ট স্পেশালিস্টের সাথে ৩০ মিনিট। আপনার ডেটা দিয়ে স্যান্ডবক্স সেটআপ করব।',
    sent: 'ধন্যবাদ — আমরা পেয়েছি।',
    sentD: 'আমাদের একজন শীঘ্রই যোগাযোগ করবে। ইতিমধ্যে ফ্রি ট্রায়াল শুরু করতে পারেন।',
    fName: 'পুরো নাম',
    wEmail: 'ওয়ার্ক ইমেইল',
    company: 'কোম্পানি',
    fPhone: 'ফোন',
    help: 'কীভাবে সাহায্য করতে পারি?',
    helpPh: 'আপনার ব্যবসা সম্পর্কে কিছু বলুন…',
    send: 'হোয়াটসঅ্যাপে পাঠান',
    tryAgain: 'আবার পাঠান',
  },
} as const;

const dictionaries = { en, bn } as const;

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

const STORAGE_KEY = 'dokani.lang';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === 'en' || stored === 'bn') setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  };

  const value = useMemo<I18nCtx>(() => {
    const dict = dictionaries[lang];
    const t = (key: string): string => {
      const parts = key.split('.');
      let cur: unknown = dict;
      for (const p of parts) {
        if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
          cur = (cur as Record<string, unknown>)[p];
        } else {
          return key;
        }
      }
      return typeof cur === 'string' ? cur : key;
    };
    return { lang, setLang, t };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useT must be used inside I18nProvider');
  return ctx;
}
