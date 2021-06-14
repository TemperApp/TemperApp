
/**
 * Singleton class to manage sound generating
 */
class DataAccessor {

  private static instance: DataAccessor;

  private constructor() {

  }

  public static get(): DataAccessor {
    if (!DataAccessor.instance)
      DataAccessor.instance = new DataAccessor();
    return DataAccessor.instance;
  }
}

export default DataAccessor;
