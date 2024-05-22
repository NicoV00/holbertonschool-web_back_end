#!/usr/bin/env python3
"""task 10"""


def update_topics(mongo_collection, name, topics):
    """changes all topics of a school document based on name"""
    uptop = mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
    return uptop
