#!/usr/bin/env python3
"""
News Generator Script

This script generates a markdown file for news posts in the format YYYY-MM-DD-accept.md
It takes two command line arguments: news title and news content.
"""

import argparse
import datetime
import os


def generate_news_file(filename, title, content):
    """
    Generate a markdown file with the given filename, title and content in the expected format.
    
    Args:
        filename (str): The name of the file to create (without extension)
        title (str): The title of the news
        content (str): The content of the news
    """
    # Get current date in YYYY-MM-DD format
    current_date = datetime.date.today()
    
    # Format the filename with the date prefix and .md extension
    full_filename = f"{current_date.strftime('%Y-%m-%d')}-accept@{filename}.md"
    
    # Format the date for the YAML front matter (with time 08:00:00+0800)
    date_time_str = current_date.strftime("%Y-%m-%d 08:00:00+0800")
    
    # Create the content for the markdown file
    markdown_content = f"""---
layout: post
title: 【论文录用】{title}
date: {date_time_str}
inline: false
related_posts: false
giscus_comments: false
category: 学术活动
---

{content}
"""
    
    # Write the content to the file
    with open(full_filename, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"Successfully created news file: {full_filename}")


def main():
    parser = argparse.ArgumentParser(description="Generate news markdown file")
    parser.add_argument("filename", type=str, help="Filename (without date and extension)")
    parser.add_argument("title", type=str, help="News title")
    parser.add_argument("content", type=str, help="News content")
    
    args = parser.parse_args()
    
    generate_news_file(args.filename, args.title, args.content)


if __name__ == "__main__":
    main()
