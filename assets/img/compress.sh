#!/bin/bash

set -x

find ./ -regex '.*\(jpg\|JPG\|png\|jpeg\)' -size +300k -exec convert -resize 50%x50% -quality 70 {} {} \;
