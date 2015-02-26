import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {

  // ---------------------------------- 埋め込まれたレコード

  attrs: {
    "commit": { embedded: "always" },
    "author": { embedded: "always" }
  },

  // ---------------------------------- レコードの正規化

  normalizeHash: {
    // idとしてコミット番号を使用する
    commit: function(hash) {
      hash.id = hash.sha;
      delete hash.committer;
      delete hash.parents;

      if (hash.commit instanceof Object) {
        hash.commit.id = hash.id;
        delete hash.commit.committer;
        delete hash.commit.tree;

        if (hash.commit.author instanceof Object)
          hash.commit.author.id = hash.id;
      }

      return hash;
    }
  },

  // ---------------------------------- メソッド

  // キーによるオブジェクトに配列を配置する
  // [record1, record2] => { "table": [record1, record2] }
  extractArray: function(store, primaryType, payload) {
    var data = {};
    data[primaryType.typeKey] = payload;
    return this._super(store, primaryType, data);
  }
});
