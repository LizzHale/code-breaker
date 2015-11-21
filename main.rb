def downcase?(char)
  char_code = char.ord
  return char_code >= 97 && char_code <= 122
end

def upcase?(char)
  char_code = char.ord
  return char_code >= 65 && char_code <= 90
end

def rotate_char(char, offset)
  return (((char.ord - offset + 13) % 26) + offset).chr
end

def crypt(message)
  final = ""
  for i in 0..message.length - 1
    if downcase?(message[i])
      offset = 97
      final += rotate_char(message[i], offset)
    elsif upcase?(message[i])
      offset = 65
      final += rotate_char(message[i], offset)
    else
      final += message[i]
    end
  end
  return final
end

def test(test_name, expected, actual)
  if expected == actual
    puts "#{test_name}: passed"
  else
    puts "#{test_name}: #{actual} does not equal #{expected}"
  end
end

test("decode", crypt("ab bar pna ernq guvf frperg zrffntr"),
     "no one can read this secret message")
test("decode", crypt("pbqrarjovrf ner gur zbfg fhccbegvir pbzzhavgl"),
     "codenewbies are the most supportive community")
test("decode", crypt("bayl n pbqrarjovr pna svther vg bhg"),
     "only a codenewbie can figure it out")
test("decode", crypt("vg vf fb fhcre frperg"),
     "it is so super secret")
test("encode", crypt("no one can read this secret message"),
     "ab bar pna ernq guvf frperg zrffntr")
test("encode", crypt("it is so super secret"),
     "vg vf fb fhcre frperg")
test("encode", crypt("only a CodeNewbie can figure it out"),
     "bayl n PbqrArjovr pna svther vg bhg")
