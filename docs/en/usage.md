# Usage

- [Setting Values](#mutator)
- [Basic Output](#output)
- [Presenter Output](#presenter)

<hr>

<a name="mutator"></a>
## Setting Values

You can set the editor field type value with a string.

{{ code('php', '$entry->example = "secret";') }}

<hr>

<a name="output"></a>
## Basic Output

The editor field type returns the encrypted value unless `auto_decrypt` is enabled.

{% code php %}
$entry->example; // YzJWamNtVjBEUW89IFl6SldhbU50VmpCRVVXODk=
{% endcode %}

<hr>

<a name="presenter"></a>
## Presenter Output

When accessing the value from a decorated entry, like one in a view, the country field type presenter is returned instead.

#### Decrypt

Returns the decrypted value.

{% code php %}
$entry->example->decrypt(); // secret
{% endcode %}

#### Hashing

You can hash the value for comparison or transmission with the following methods.

{% code php %}
// The hash method accepts an optional algorithm parameter.
$entry->example->hash();      // 6e3d4e46935b52bfb4daaed421473889
$entry->example->hash("md5"); // 6e3d4e46935b52bfb4daaed421473889

$entry->example->md5();    // 6e3d4e46935b52bfb4daaed421473889
$entry->example->sha1();   // a03056fa8a884851cb248dbd133bcc622f28f5f3
$entry->example->sha256(); // 53668b86df3245b62e4ddb457e978b073d99886245c2547753fd600b3a50e3ee
{% endcode %}
