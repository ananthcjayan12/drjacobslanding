# AI Agent Instructions for Dental Clinic Template

## Overview
This document provides instructions for AI agents (GitHub Copilot, Claude Code, etc.) on how to help users customize this dental clinic website template.

## Your Role
When a user provides information about their dental clinic, your job is to:
1. Parse the information from any format (text, bullet points, conversation, etc.)
2. Update the `site.config.js` file with the extracted information
3. Ensure all changes maintain valid JavaScript syntax
4. Preserve the structure and comments in the config file

---

## How to Parse User Input

### Common Input Formats
Users may provide information in various formats:

**Format 1: Conversational**
```
"Hi, my clinic name is Bright Smile Dental, located in Mumbai. 
My name is Dr. Sharma and I specialize in cosmetic dentistry. 
Phone is 9876543210."
```

**Format 2: Structured List**
```
- Clinic Name: Bright Smile Dental
- Doctor: Dr. Sharma
- Location: Mumbai, Maharashtra
- Phone: +91 9876543210
- Services: Cosmetic Dentistry, Implants, Whitening
```

**Format 3: Bullet Points**
```
* Clinic: Bright Smile Dental
* Location: 123 MG Road, Mumbai
* Contact: 9876543210
* Email: info@brightsmile.com
```

### Information Extraction Guidelines

1. **Clinic Name**: Look for keywords like "clinic name", "dental clinic", "practice name", or possessive phrases like "my clinic is called"

2. **Doctor/Founder**: Extract from "Dr.", "Doctor", "dentist name", "my name is", "I am"

3. **Location**: Parse address components:
   - Street/Building names
   - Area/Locality
   - City
   - State/Province
   - Country
   - PIN/ZIP code

4. **Contact Info**: 
   - Phone numbers (various formats: with/without country code, spaces, dashes)
   - Email addresses
   - Social media handles

5. **Services**: Look for treatment types, specializations, or services offered

6. **Operating Hours**: Parse time ranges and days

7. **Theme/Branding**: Extract color preferences, brand colors, or styling requests

---

## Updating site.config.js

### General Rules

1. **Always maintain valid JavaScript syntax**
2. **Preserve all comments** in the config file
3. **Keep the structure intact** - only update values
4. **Use proper string escaping** for quotes in text
5. **Validate phone numbers and emails** before inserting

### Step-by-Step Update Process

#### Step 1: Read Current Config
```javascript
// First, read the current site.config.js to understand existing values
```

#### Step 2: Map Extracted Info to Config Fields

| User Info | Config Path | Example |
|-----------|-------------|---------|
| Clinic Name | `siteConfig.clinic.name` | "Bright Smile Dental" |
| Doctor Name | `siteConfig.clinic.founder.name` | "Dr. Sharma" |
| Phone | `siteConfig.clinic.contact.phone` | "+91 9876543210" |
| Email | `siteConfig.clinic.contact.email` | "info@brightsmile.com" |
| Street Address | `siteConfig.clinic.address.street` | "123 MG Road, Andheri" |
| City | `siteConfig.clinic.address.city` | "Mumbai" |
| State | `siteConfig.clinic.address.state` | "Maharashtra" |
| Slogan/Tagline | `siteConfig.clinic.slogan` | "Your Smile, Our Mission" |
| Deployment Name | `.github/workflows/deploy.yml` → `PROJECT_NAME` | "bright-smile-dental" |

**Note**: Deployment name should be:
- All lowercase
- Use hyphens instead of spaces
- Remove special characters and apostrophes
- Keep only letters, numbers, and hyphens

#### Step 3: Update Config File

Use the `replace_string_in_file` or `multi_replace_string_in_file` tool to update values.

**Example:**
```javascript
// If user says: "My clinic is called Bright Smile Dental"
// Update:
name: "Dr. Pooja's Smile Craft Dental Clinic"
// To:
name: "Bright Smile Dental"
```

---

## Common Scenarios

### Scenario 1: New Clinic Setup
User provides complete clinic information.

**Action:**
- Update all clinic information fields
- Update hero section with clinic name
- Update about section with doctor info
- Generate appropriate slogan if not provided

### Scenario 2: Update Services
User wants to add/modify services.

**Action:**
- Parse service names and descriptions
- Map to appropriate icons (see Icon Mapping below)
- Update `siteConfig.services.items` array
- Maintain the object structure for each service

### Scenario 3: Change Theme Colors
User specifies brand colors.

**Action:**
- Convert color names/hex values to Tailwind color palette
- Update `siteConfig.theme.colors.primary` and `secondary`
- Suggest complementary colors if only one color provided

### Scenario 4: Update Contact Info
User updates phone, email, or address.

**Action:**
- Validate phone number format
- Validate email format
- Extract WhatsApp number from phone (remove +, spaces, dashes)
- Update all contact-related fields

### Scenario 5: Update Operating Hours
User provides new schedule.

**Action:**
- Parse day ranges (e.g., "Monday to Saturday" → "Monday – Saturday")
- Parse time formats (12-hour/24-hour)
- Update `siteConfig.clinic.hours` array

### Scenario 6: Update Deployment Configuration
User provides clinic information for the first time.

**Action:**
- Generate a deployment-friendly project name from clinic name
- Update `PROJECT_NAME` in `.github/workflows/deploy.yml`
- Format: lowercase, hyphens instead of spaces, remove special characters
- Example: "Bright Smile Dental" → "bright-smile-dental"

---

## Updating Deployment Configuration

When a user sets up their clinic information for the first time, you should also update the deployment configuration to match their clinic name.

### GitHub Actions Deployment File

**File**: `.github/workflows/deploy.yml`

**What to Update**:
```yaml
env:
  PROJECT_NAME: clinic-name-here  # Update this
```

### Project Name Formatting Rules

Convert the clinic name to a deployment-friendly format:

1. **Convert to lowercase**
   - "Bright Smile Dental" → "bright smile dental"

2. **Replace spaces with hyphens**
   - "bright smile dental" → "bright-smile-dental"

3. **Remove special characters**
   - Remove apostrophes: "Dr. Pooja's Clinic" → "dr poojas clinic"
   - Remove periods: "Dr." → "dr"
   - Remove commas, quotes, etc.

4. **Keep only valid characters**
   - Valid: letters (a-z), numbers (0-9), hyphens (-)
   - Remove everything else

5. **Avoid consecutive hyphens**
   - "Smile  Care" → "smile-care" (not "smile--care")

### Examples

| Clinic Name | Deployment Name |
|-------------|-----------------|
| "Dr. Pooja's Smile Craft Dental Clinic" | "dr-poojas-smile-craft-dental-clinic" |
| "Bright Smile Dental Care" | "bright-smile-dental-care" |
| "Mumbai Dental & Orthodontics" | "mumbai-dental-orthodontics" |
| "Smile Care 24/7" | "smile-care-24-7" |
| "Dr. Sharma's Advanced Dental" | "dr-sharmas-advanced-dental" |

### Implementation

When updating clinic name, also update deployment config:

```javascript
// Generate deployment name
const deploymentName = clinicName
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
  .replace(/\s+/g, '-')          // Replace spaces with hyphens
  .replace(/-+/g, '-')           // Remove consecutive hyphens
  .replace(/^-|-$/g, '');        // Remove leading/trailing hyphens

// Then update the deploy.yml file
replace_string_in_file(
  ".github/workflows/deploy.yml",
  "PROJECT_NAME: smilecraft-landing",
  `PROJECT_NAME: ${deploymentName}`
)
```

### When to Update

Update the deployment name when:
- User provides clinic name for the first time
- User changes their clinic name
- User explicitly requests deployment configuration update

### Validation

Before updating, verify:
- [ ] Name is all lowercase
- [ ] Only contains letters, numbers, and hyphens
- [ ] No consecutive hyphens
- [ ] No hyphens at start or end
- [ ] Not empty
- [ ] Length is reasonable (5-50 characters)

If the generated name seems too long (>50 chars), you can:
- Ask the user for a shorter version
- Suggest abbreviated version
- Use main identifying words (e.g., "clinic name" part only)

---

## Icon Mapping Reference

Map service types to icon identifiers:

| Service Type | Icon Identifier |
|--------------|-----------------|
| Smile Design, Cosmetic, Aesthetics | `sparkles` |
| Aligners, Braces, Orthodontics | `adjustments` |
| Root Canal, RCT, Endodontics | `shield` |
| Implants, Dental Implants | `cube` |
| Whitening, Bleaching | `sun` |
| Kids, Children, Pediatric | `users` |
| Cleaning, Hygiene | `sparkles` |
| Surgery, Oral Surgery | `beaker` |
| Crown, Bridge | `cube` |
| Dentures | `squares` |

---

## Validation Checklist

Before confirming updates, verify:

- [ ] All JavaScript syntax is valid
- [ ] Strings are properly escaped (quotes within quotes)
- [ ] Phone numbers are in correct format
- [ ] Email addresses are valid
- [ ] URLs start with http:// or https://
- [ ] WhatsApp number has no special characters
- [ ] All required fields have values
- [ ] Color codes are valid (hex or Tailwind classes)

---

## Example Interaction

**User Input:**
```
Hi! I'm Dr. Amit Patel and I run Smile Care Dental Clinic in Bangalore. 
We're located at 45 MG Road, Koramangala, Bangalore, Karnataka 560034.
Phone: +91 8012345678
Email: contact@smilecare.in
We offer cosmetic dentistry, implants, and orthodontics.
```

**Your Response:**
```
I'll update your clinic information in the configuration file.

Extracted Information:
- Clinic Name: Smile Care Dental Clinic
- Doctor: Dr. Amit Patel
- Location: 45 MG Road, Koramangala, Bangalore, Karnataka 560034
- Phone: +91 8012345678
- Email: contact@smilecare.in
- Services: Cosmetic Dentistry, Implants, Orthodontics

Updating site.config.js...
```

**Actions Taken:**
1. Update `siteConfig.clinic.name`
2. Update `siteConfig.clinic.founder.name`
3. Update all address fields
4. Update contact information
5. Update services list with the three services
6. Update hero and about sections to reflect new clinic name
7. Update deployment project name to "smile-care-dental-clinic" in `.github/workflows/deploy.yml`

---

## Advanced Features

### Auto-Generate Content
If user doesn't provide certain information, you can:

1. **Slogan**: Generate based on clinic name or specialty
   - Example: "Bright Smile Dental" → "Brightening Your Tomorrow"

2. **About Paragraph**: Create professional description using provided info
   - Use clinic name, doctor name, location, specialty

3. **Hero Description**: Customize based on services offered

4. **SEO Meta**: Generate from clinic info
   - Title: `[Clinic Name] | [Services] in [City]`
   - Description: Professional summary with location and services

### Smart Defaults

When information is missing:
- **State**: Try to infer from city name
- **Country**: Default to "India" for Indian phone codes
- **Hours**: Use standard clinic hours (9 AM - 7 PM)
- **Email**: Generate from clinic name if not provided (with user confirmation)

---

## Error Handling

### Common Errors and Solutions

1. **Invalid Phone Format**
   - Always include country code
   - Remove spaces and special characters for WhatsApp number

2. **Missing Required Fields**
   - Prompt user for: clinic name, doctor name, phone, location

3. **Invalid Color Codes**
   - Convert color names to hex codes
   - Use online tools to generate Tailwind palette

4. **Malformed Addresses**
   - Break down partial addresses to available components
   - Leave empty fields blank rather than guessing

---

## Testing Updates

After making changes:

1. **Syntax Check**: Ensure valid JavaScript
2. **Import Test**: Try importing the config in a component
3. **Visual Check**: Recommend user preview the website
4. **Validation**: Run through checklist above

---

## Best Practices

1. **Ask for Clarification**: If information is ambiguous, ask user
2. **Confirm Changes**: Show what you're updating before doing it
3. **Preserve User Data**: Don't overwrite existing data unless explicitly told
4. **Maintain Consistency**: Keep naming conventions and formatting
5. **Document Changes**: Briefly mention what was updated

---

## Quick Reference Commands

For AI agents to execute:

```javascript
// Read config
read_file("site.config.js")

// Update single field
replace_string_in_file("site.config.js", oldValue, newValue)

// Update multiple fields efficiently
multi_replace_string_in_file([
  { file: "site.config.js", old: oldValue1, new: newValue1 },
  { file: "site.config.js", old: oldValue2, new: newValue2 }
])

// Update deployment configuration
replace_string_in_file(
  ".github/workflows/deploy.yml",
  "PROJECT_NAME: smilecraft-landing",
  "PROJECT_NAME: your-clinic-name"
)
```

---

## Support

If you encounter edge cases or unclear requirements:
1. Read the TEMPLATE_README.md for user-facing documentation
2. Check existing config structure for patterns
3. Ask user for clarification on ambiguous inputs
4. Default to safe, minimal changes when uncertain

---

**Remember**: Your goal is to make it effortless for users to customize their dental clinic website. Be helpful, accurate, and thorough!
