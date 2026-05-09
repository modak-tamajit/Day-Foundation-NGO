# DAY Foundation — Image Assets Guide

> **IMPORTANT**: All images below are AI-generated placeholders.
> Replace each file with your own real photographs to make the site production-ready.
> Keep the same filenames — the components reference these exact paths.

## How to Replace Images

1. Navigate to `public/images/`
2. Replace each file below with your real image (keep the exact filename)
3. Recommended format: `.jpg` or `.webp`
4. Recommended resolution: at least 1200x800px for large images, 400x400px for portraits

---

## Image Inventory

### Hero Section
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `hero-main.jpg` | Homepage Hero | Main hero image — community/volunteer scene | 1200x1600px (portrait) |

### Focus Areas (4 images)
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `focus-education.jpg` | Homepage Focus Areas, Programs page | Education program scene | 800x600px |
| `focus-healthcare.jpg` | Homepage Focus Areas, Programs page | Healthcare/aid drive scene | 800x600px |
| `focus-community.jpg` | Homepage Focus Areas, Programs page | Youth empowerment/volunteer scene | 800x600px |
| `focus-livelihood.jpg` | Homepage Focus Areas, Programs page | Rojgar/livelihood training scene | 800x600px |

### Campaign/Impact Stories (3 images)
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `campaign-education.jpg` | Homepage Stories, Impact page | Slum children education drive | 1200x800px |
| `campaign-health.jpg` | Homepage Stories, Impact page | Healthcare camp scene | 800x600px |
| `campaign-livelihood.jpg` | Homepage Stories, Impact page | Livelihood/Rojgar program | 800x600px |

### Team Portraits (9 images — Central + City Management)
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `team-niharika.jpg` | Homepage Team, About page | Niharika Vasvani — Head of HR | 400x400px (square) |
| `team-aditi.jpg` | Homepage Team, About page | Aditi Tiwari — Head of Programs | 400x400px |
| `team-khushi.jpg` | Homepage Team, About page | Khushi Tandon — Head of Legal | 400x400px |
| `team-radhika.jpg` | Homepage Team, About page | Radhika Umre — Head of SMH | 400x400px |
| `team-harshita.jpg` | Homepage Team, About page | Harshita Saraiya — Head of PR | 400x400px |
| `team-khushali.jpg` | Homepage Team, About page | Khushali Tak — Head of Finance | 400x400px |
| `team-moulshree.jpg` | About page (City Mgmt) | Moulshree Sahu — Jabalpur Rep | 400x400px |
| `team-vinayak.jpg` | About page (City Mgmt) | Vinayak Khandelwal — Jabalpur | 400x400px |
| `team-anmol.jpg` | About page (City Mgmt) | Anmol Chugwani — Indore | 400x400px |
| `founder.jpg` | About page (Founder msg) | Founder & Executive Director | 400x500px |

### Testimonials (3 images)
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `testimonial-1.jpg` | Homepage Testimonials | Intern volunteer portrait | 200x200px (square) |
| `testimonial-2.jpg` | Homepage Testimonials | Healthcare volunteer portrait | 200x200px |
| `testimonial-3.jpg` | Homepage Testimonials | Student intern portrait | 200x200px |

### Events (3 images)
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `event-education.jpg` | Homepage Events | Community education drive | 600x400px |
| `event-health.jpg` | Homepage Events | Healthcare awareness camp | 600x400px |
| `event-volunteer.jpg` | Homepage Events | Volunteer orientation | 600x400px |

### Gallery (6 images)
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `gallery-1.jpg` | Homepage Gallery | Health camp scene | 800x600px |
| `gallery-2.jpg` | Homepage Gallery | Digital classroom | 600x400px |
| `gallery-3.jpg` | Homepage Gallery | Supply distribution | 600x400px |
| `gallery-4.jpg` | Homepage Gallery | Women's training | 800x600px |
| `gallery-5.jpg` | Homepage Gallery | Community gathering | 600x400px |
| `gallery-6.jpg` | Homepage Gallery | Tree planting | 600x400px |

### Other
| Filename | Used In | Description | Recommended Size |
|---|---|---|---|
| `about-story.jpg` | About page | Founding story image | 1200x900px |
| `volunteer-cta.jpg` | Homepage Volunteer CTA | Volunteers working together | 1200x900px |
| `donation-cta.jpg` | Get Involved page | Children/beneficiaries | 1200x900px |
| `india-map.jpg` | Contact page | India map with city markers | 1200x900px |
| `og-image.jpg` | SEO (meta tags) | Open Graph social share image | 1200x630px |

---

## Generated Images Location

All AI-generated images are stored at:
```
C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\
```

Copy them to `t:\NGO\public\images\` using these commands in PowerShell:

```powershell
mkdir "t:\NGO\public\images" -Force

# Hero
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\hero_main_1778344262067.png" "t:\NGO\public\images\hero-main.jpg"

# Focus Areas
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_education_1778344276853.png" "t:\NGO\public\images\focus-education.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_healthcare_1778344292397.png" "t:\NGO\public\images\focus-healthcare.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_community_1778344307382.png" "t:\NGO\public\images\focus-community.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_livelihood_1778344335010.png" "t:\NGO\public\images\focus-livelihood.jpg"

# Campaigns
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\campaign_education_1778344350622.png" "t:\NGO\public\images\campaign-education.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\campaign_health_1778344367330.png" "t:\NGO\public\images\campaign-health.jpg"

# Use livelihood as campaign-livelihood too
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_livelihood_1778344335010.png" "t:\NGO\public\images\campaign-livelihood.jpg"

# Volunteer & Donation CTA
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\volunteer_cta_1778344384797.png" "t:\NGO\public\images\volunteer-cta.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\donation_cta_1778344445073.png" "t:\NGO\public\images\donation-cta.jpg"

# About & Map
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\about_story_1778344427480.png" "t:\NGO\public\images\about-story.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\india_map_1778344460597.png" "t:\NGO\public\images\india-map.jpg"

# OG Image
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\og_image_1778344610109.png" "t:\NGO\public\images\og-image.jpg"

# Testimonials (reuse portrait for all 3 for now)
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\testimonial_portrait_1778344567189.png" "t:\NGO\public\images\testimonial-1.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\testimonial_portrait_1778344567189.png" "t:\NGO\public\images\testimonial-2.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\testimonial_portrait_1778344567189.png" "t:\NGO\public\images\testimonial-3.jpg"

# Events (reuse event education for all 3 for now)
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\event_education_1778344590430.png" "t:\NGO\public\images\event-education.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\campaign_health_1778344367330.png" "t:\NGO\public\images\event-health.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\volunteer_cta_1778344384797.png" "t:\NGO\public\images\event-volunteer.jpg"

# Gallery (reuse existing images for now)
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\campaign_health_1778344367330.png" "t:\NGO\public\images\gallery-1.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_education_1778344276853.png" "t:\NGO\public\images\gallery-2.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\volunteer_cta_1778344384797.png" "t:\NGO\public\images\gallery-3.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_livelihood_1778344335010.png" "t:\NGO\public\images\gallery-4.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\focus_community_1778344307382.png" "t:\NGO\public\images\gallery-5.jpg"
Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\about_story_1778344427480.png" "t:\NGO\public\images\gallery-6.jpg"

# Team placeholders (use hero image as placeholder — replace with real photos!)
$teamNames = @("niharika","aditi","khushi","radhika","harshita","khushali","moulshree","vinayak","anmol","founder")
foreach ($name in $teamNames) {
    Copy-Item "C:\Users\modak\.gemini\antigravity\brain\7721ee80-c457-45c1-bb26-3ab81ed37700\testimonial_portrait_1778344567189.png" "t:\NGO\public\images\team-$name.jpg"
}
```

**Total images needed: 33 files**
