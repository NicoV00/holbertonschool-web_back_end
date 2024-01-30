#!/usr/bin/env python3
"""function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """function returns a callable object that multiplies
    multiplier by other float"""
    def func(x: float) -> float:
        return x * multiplier
    return func
