import { writable } from 'svelte/store';

export const dropdown = writable([
  false, false, false, false, false, false, false, false, false, false, false, false, false, false
])

export const NavItems = writable([
  {
    "name": "Home",
    "folder": "/",
    "items": []
  },
  {
    "name": "About Us",
    "folder": "/aboutus",
    "items": ["About-BITS", "About-ABWEC", "Message-from-Secretary-&-Correspondent", "Message-from-Principal"]
  },
  {
    "name": "Contact Us",
    "folder": "/contactus",
    "items": []
  },
  {
    "name": "Courses",
    "folder": "/department",
    "items": [
      "Department of CSE",
      "Department of CSE (AI & ML)",
      "Department of CSE (Cyber Security)",
      "Department of ECE",
      "Department of EEE",
      "Department of MECH",
      "Department of BS&H",
      "Department of MBA"
    ]
  },
  {
    "name": "Faculty",
    "folder": "/faculty",
    "items": []
  },
  {
    "name": "Exam Cell",
    "folder": "/examcell",
    "items": ["BTECH", "MBA", "MTECH"]
  },
  {
    "name": "Facilities",
    "folder": "/facilities",
    "items": [
      "Laboratories",
      "Knowledge-Resource-Center",
      "Accomidation",
      "Cafeteria",
      "Sports",
      "Transport"
    ]
  },
  {
    "name": "Governance",
    "folder": "/governance",
    "items": [
      "Administration",
      "Statutory-Bodies",
      "Academic-Council",
      "Board-of-Studies"
    ]
  },
  {
    "name": "Research",
    "folder": "/research",
    "items": ["publications", "projects"]
  },
  {
    "name": "CDC",
    "folder": "/placements",
    "items": []
  },
  {
    "name": "More",
    "folder": "/more",
    "items": [
      "committees",
      "gallery",
      "Students",
      "Industry-Linkages",
      "infrastructure",
      "finance-quality",
      "Mandatory",
      "Online-Grievances",
      "contactus"
    ]
  }
])