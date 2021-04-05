#!/bin/bash
set -e

TYPE=$1
TYPE=${TYPE:-swarrot}

echo "---------------------------------------------------"
echo "> Type: $TYPE"
echo "> Info: 10 producers running in parallel"
echo "---------------------------------------------------"
echo "10 producers running..."


while true
do
  for i in {1..10}
  do
    if [ "$TYPE" == "oldsound" ]
    then
      { bin/console rb:oldsound; } &
    else
      { bin/console rb:test; } &
    fi
    usleep 100000
  done
  wait
  echo "10 new producers running..."
done
