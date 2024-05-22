#!/usr/bin/env python3
"""task 9"""

def insert_school(mongo_collection, **kwargs):
    """elements inserts a new document in a collection based on kwargs:"""
    elementr = mongo_collection.insert_one(kwargs)
    return elementr.inserted_id
