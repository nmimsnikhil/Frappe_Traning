# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in liberary_system_management/__init__.py
from liberary_system_management import __version__ as version

setup(
	name='liberary_system_management',
	version=version,
	description='Manages th Liberary app',
	author='Nikhil',
	author_email='nikhil@bloomstack.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
