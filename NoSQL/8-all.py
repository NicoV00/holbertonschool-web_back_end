#!/usr/bin/env python3
"""task 8"""

def list_all(mongo_collection):
    """elements Python function that lists all documents in a coll"""
    elements = mongo_collection.find()
    return elements
