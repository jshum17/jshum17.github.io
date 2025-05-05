---
title: 
date: 2025-04-25
type: landing

design:
  # Default section spacing
  spacing: "4rem"

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: biography
    content:
      username: admin
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download Resume
        url: uploads/resume.pdf
    design:
      banner:
        # Upload your cover image to the `assets/media/` folder and reference it here
        filename: banner.jpg
      biography:
        # Customize the style of your biography text
        style: 'text-align: justify; font-size: 0.8em;'
  - block: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: true
  - block: skills
    content:
      title: Skills
      username: admin
      design:
  # - block: awards
  #   content:
  #     title: Awards
  #     username: admin
  # - block: languages
  #   content:
  #     title: Languages
  #     username: admin
  - block: collection
    content:
      title: Projects
      text:
      filters:
        folders:
          - projects
    design:
      view: article-grid
      fill_image: true
---
